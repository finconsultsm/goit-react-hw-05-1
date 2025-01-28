import * as SC from "./SharedLayout/SharedLayout.styled";

export const Navigation = () => {
  return (
    <>
      <SC.Link to="/">Home</SC.Link>
      <SC.Link to="/movies">Movies</SC.Link>
    </>
  );
};
