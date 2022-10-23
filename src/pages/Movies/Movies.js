import { useState, useEffect,useCallback  } from 'react';
import { useSearchParams } from "react-router-dom";
import  FilmList  from "../../components/FilmList/FilmList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { getFilms } from "api";


const Movies = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get("query") ?? "";


  const updateQueryString = (query) => {
      const nextParams = query !== "" ? { query } : {};      
      setSearchParams(nextParams);
  };
  const fetchFilms = useCallback(async () => {
  try {
    setIsLoading(true);
    const films = await getFilms(filmName);
    setFilms(films);
  } catch {
    setError('Failed to load films :(');
  } finally {
    setIsLoading(false);   
  }
}, [filmName]);

  
  useEffect(() => {
  filmName &&  fetchFilms();
}, [fetchFilms,filmName]);


  return (
   <main>
       <SearchBox onSubmit={updateQueryString}  value={filmName} onChange={updateQueryString}/>
      {!isLoading ?(!error ? <FilmList films={films} />:<div>{error}</div>)
        : <div>Is loading</div>}
      </main>
  );
};


export default Movies;