import { Outlet } from "react-router-dom";
import * as SC from "./SharedLayout.styled";
import { Box } from "../Box";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <>
      <SC.Header>
        <SC.Link to="/">Home</SC.Link>
        <SC.Link to="/movies">Movies</SC.Link>
      </SC.Header>
      <Box pl={4} pr={4}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default SharedLayout;
