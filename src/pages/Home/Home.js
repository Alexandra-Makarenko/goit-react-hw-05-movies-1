import { useState, useEffect,useCallback  } from 'react';
import { getTrendingFilms } from "api";
import FilmList  from "../../components/FilmList/FilmList";


const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   const fetchFilms = useCallback(async () => {
  try {
    setIsLoading(true);
    const films = await getTrendingFilms();
    setFilms(films);
  } catch {
    setError('Failed to load films :(');
  } finally {
    setIsLoading(false);   
  }
}, []);

useEffect(() => {
    fetchFilms();
}, [fetchFilms]);
  
  return (
    <main>
      <h1>Tranding today</h1>
       {!isLoading ?(!error ? <FilmList films={films} />:<div>{error}</div>)
        : <div>Is loading</div>}
    </main>
  );
}
export default Home;
