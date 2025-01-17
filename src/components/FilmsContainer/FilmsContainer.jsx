import FilmCards from '../FilmCard/FilmCard';
import * as SC from './FilmsContainer.styled';
import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

const FilmsContainer = ({ films }) => {
  const location = useLocation();

  if (!films) return;

  return (
    <SC.TrendingContainer>
      {films.map(film => {
        return (
          <SC.TrendingItem key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              <FilmCards film={film} />
            </Link>
          </SC.TrendingItem>
        );
      })}
    </SC.TrendingContainer>
  );
};

FilmsContainer.propTypes = {
  film: PropTypes.arrayOf(PropTypes.object),
};

export default FilmsContainer;
