import { useParams } from "react-router-dom";
import { getFilmCast } from "api";
import { useState, useEffect, useCallback } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 
   const fetchFilms = useCallback(async () => {
  try {
    setIsLoading(true);
    const film = await getFilmCast(movieId);
    setFilm(film);
  } catch {
    setError('Failed to load cast :(');
  } finally {
    setIsLoading(false);   
  }
}, [movieId]);

useEffect(() => {
    fetchFilms();
 }, [fetchFilms]);
    
  return (
      <main>
          <h1>Cast</h1>
    {!isLoading ?  (!error ?  <div>
      {film.map((cast) => (
            <div key={cast.id}
        > <li>{cast.name}</li></div>         
                ))}
    </div>:<div>{error}</div>) :<div>Is loading</div>}
    </main>
  );
};
export default Cast;