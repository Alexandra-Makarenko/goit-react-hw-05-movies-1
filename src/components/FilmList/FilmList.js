// import { Link } from "react-router-dom";
import { Container, Img,ListItem } from "./FilmList.styled";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <Container>
      {films.map((film) => (
                    <div key={film.id}
        > {<ListItem><Link to={`/movies/${film.id}`} state={{ from: location }}>
            <Img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} />
            {film.title || film.name}
          </Link>
        </ListItem>}</div>
                ))}
    </Container>
  );
};

export default FilmList;

   FilmList.propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        name:PropTypes.string,
        }).isRequired).isRequired,
    }
