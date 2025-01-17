import FilmInfo from "../components/FilmInfo/FilmInfo";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../helpers/API";
import { BackBtn } from "../components/BackBtn/BackBtn";
import { Box } from "../components/Box";
import MoreMovieInfo from "../components/MovieMoreInfo/MoreMovieInfo";

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const BackLink = location.state?.from ?? "/";

  useEffect(() => {
    getMovieById(moviesId)
      .then(setFilm)
      .catch((err) => console.log(err));
  }, [moviesId]);

  return (
    <main>
      <Box pt={3} pb={2}>
        <BackBtn to={BackLink}>Go Back</BackBtn>
      </Box>
      {film && <FilmInfo film={film} />}
      {film && <MoreMovieInfo location={location} />}
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
