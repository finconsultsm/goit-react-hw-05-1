import { Box } from "../Box";
import { getMovieReviewsById } from "../../helpers/API";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as SC from "./Reviews.styled";

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsById(moviesId)
      .then((res) => setReviews(res.results))

      .catch((err) => console.log(err));
  }, [moviesId]);

  if (!reviews) return;

  return (
    <Box p={4}>
      <SC.ReviewsList>
        {reviews.length === 0 ? (
          <p>Not Found</p>
        ) : (
          reviews.map((review) => {
            return (
              <SC.ReviewsItem key={review.id}>
                <SC.Title>{review.author}</SC.Title>
                <p>{review.content}</p>
              </SC.ReviewsItem>
            );
          })
        )}
      </SC.ReviewsList>
    </Box>
  );
};

export default Reviews;
