import { Outlet } from "react-router-dom";
import * as SC from "./SharedLayout.styled";
import { Box } from "../Box";
import { Suspense } from "react";
import { Navigation } from "../Navigation";

const SharedLayout = () => {
  return (
    <>
      <SC.Header>
        <Navigation />
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
