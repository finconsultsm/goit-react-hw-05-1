import { Box } from "../components/Box";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { getSearchFilms } from "../helpers/API";
import { useState, useEffect } from "react";
import FilmsContainer from "../components/FilmsContainer/FilmsContainer";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("q") ?? "";

  useEffect(() => {
    if (productName === "") return;
    getSearchFilms(productName)
      .then((data) => {
        setSearchFilms(data.results);
      })
      .catch((err) => console.log(err));
  }, [productName]);

  const onSubmit = ({ q }) => {
    const nextParams = q !== "" ? { q } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <Box p={4}>
        <SearchForm onSubmit={onSubmit} />
        <FilmsContainer films={searchFilms} />
      </Box>
    </main>
  );
};

export default Movies;
