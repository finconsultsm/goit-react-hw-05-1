import { Link } from "react-router-dom";
import { Box } from "../Box";
import * as SC from "./MoreMovieInfo.styled";

const MoreMovieInfo = ({ location }) => {
  return (
    <Box p={4} borderTop={"midle"} borderBottom={"midle"} borderColor={"dark"}>
      <SC.Title>Additional information</SC.Title>
      <SC.LinkList as="ul">
        <SC.ListItem>
          <Link to="cast" state={{ from: location.state?.from ?? "/" }}>
            Cast
          </Link>
        </SC.ListItem>
        <SC.ListItem>
          <Link to="reviews" state={{ from: location.state?.from ?? "/" }}>
            Reviews
          </Link>
        </SC.ListItem>
      </SC.LinkList>
    </Box>
  );
};

export default MoreMovieInfo;
