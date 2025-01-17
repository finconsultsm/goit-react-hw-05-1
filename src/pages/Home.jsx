import { Box } from "../components/Box";
import TrendingContainer from "../components/FilmsContainer/FilmsContainer";
import { useEffect, useState } from "react";
import * as API from "../helpers/API";

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    API.getTrendingFilms()
      .then((data) => {
        setTrending(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Box as="section" pt={4} pb={4} textAlign={"center"}>
        <h1>Trending today</h1>
        <TrendingContainer films={trending} />
      </Box>
    </main>
  );
};

export default Home;
