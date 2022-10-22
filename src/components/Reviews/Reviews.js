import { useParams } from "react-router-dom";
import { getFilmReviews } from "api";
import { useState, useEffect, useCallback } from 'react';

const Reviews = () => {
 const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   const fetchFilms = useCallback(async () => {
  try {
    setIsLoading(true);
    const film = await getFilmReviews(movieId);
    setFilm(film);
  } catch {
    setError('Failed to load film :(');
  } finally {
    setIsLoading(false);   
  }
}, [movieId]);

useEffect(() => {
    fetchFilms();
 }, [fetchFilms]);
  return (
    <main>
      <h1>Reviews</h1>
      {!isLoading ?  (!error ? 
     <div>
      {film.map((cast) => (
                    <div key={cast.id}
        > <li>{cast.author}:
            <p>{cast.content}</p>
          </li>
               </div>
                ))}
    </div>:<div>{error}</div>) :<div>Is loading</div>}
    </main>
  );
};
export default Reviews;
