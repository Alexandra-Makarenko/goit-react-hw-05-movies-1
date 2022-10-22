import { useState, useEffect, useCallback,Suspense } from 'react';
import { useParams,Link, Outlet,useLocation } from "react-router-dom";
import { getFilmById,getFilmGenres } from "api";
import { GoBackBtn } from "../GoBackBtn/GoBackBtn";
import { Container, FilmBox } from "./MovieDetails.styled";


const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

   const fetchFilms = useCallback(async () => {
  try {
    setIsLoading(true);
    const film = await getFilmById(movieId);
    const genres = await getFilmGenres(movieId);
    setFilm(film);
    setGenres(genres);
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
      <GoBackBtn link={location.state?.from ?? '/movies'} />
        {!isLoading ? <div>
          <h2>{film.title || film.name}</h2>  
          <FilmBox>                
          <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} />
            {!error ?<Container>
              <h2>Overview</h2>
              <p>{film.overview}</p>           
              <h2>User score</h2>
              <p>{film.popularity}</p>
              <h2>Genres</h2>          
              {genres.map((genre) => (
                    <div key={genre}
                > {<li>{genre}</li>}
                </div>
                ))}           
            </Container> : <div>{error}</div>}
          </FilmBox>
         <ul>
        <li>
          <Link to="cast" state={{from:location.state?.from ?? '/movies'}}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{from:location.state?.from ?? '/movies'}}>Reviews</Link>
        </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>   
      </div>
          : <div>Loading information...</div>}
        
    </main>
  );
};

export default MovieDetails;
