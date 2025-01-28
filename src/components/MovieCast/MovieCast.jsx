import { Box } from "../Box";
import { getMovieCreditsById } from "../../helpers/API";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as SC from "./MovieCast.styled";

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCreditsById(moviesId)
      .then((res) => setCast(res.cast))

      .catch((err) => console.log(err));
  }, [moviesId]);

  const imageUrl = `https://image.tmdb.org/t/p/w400`;
  if (!cast) return;

  return (
    <Box p={4}>
      <SC.CastList>
        {cast.length === 0 ? (
          <p>Not Found</p>
        ) : (
          cast.map((actor) => {
            return (
              <SC.CastItem key={actor.id}>
                <Box width="150px">
                  {actor.profile_path ? (
                    <img
                      src={`${imageUrl + actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <Box height="230px" bg={"dark"} />
                  )}
                </Box>
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </SC.CastItem>
            );
          })
        )}
      </SC.CastList>
    </Box>
  );
};

export default Cast;
