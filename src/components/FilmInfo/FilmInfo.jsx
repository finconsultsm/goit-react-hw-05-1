import { Box } from "../Box";
import * as SC from "./FilmInfo.styled";
import PropTypes from "prop-types";

const FilmInfo = ({ film }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w400${film.poster_path}`;

  return (
    <Box display="flex" pt={2} pb={3}>
      <SC.Thumb>
        <img src={imageUrl} alt={film.original_title} />
      </SC.Thumb>
      <Box p={4}>
        <SC.Title>{film.original_title}</SC.Title>
        <SC.Text>
          <span>User Score: </span>
          <span>{Math.round(film.vote_average * 10)}%</span>
        </SC.Text>
        <SC.SubTitle>Overview</SC.SubTitle>
        <SC.Text>{film.overview}</SC.Text>
        <SC.SubTitle>Genres</SC.SubTitle>
        <SC.Text>{film.genres.map((g) => g.name).join(" ")}</SC.Text>
      </Box>
    </Box>
  );
};

FilmInfo.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmInfo;
