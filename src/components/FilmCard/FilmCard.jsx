import * as SC from './FilmCard.styled';
import PropTypes from 'prop-types';

const FilmCard = ({ film }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w400${film.poster_path}`;

  return (
    <>
      <SC.Thumb>
        <img src={imageUrl} alt={film.original_title} />
      </SC.Thumb>
      <p>{film.original_title}</p>
    </>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmCard;
