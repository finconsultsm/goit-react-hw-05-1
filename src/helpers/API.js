import axios from 'axios';

const KEY = '4e2adfed3e75fb39ea8e5bb1caf6a485';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingFilms = async () => {
  const response = await axios.get('trending/movie/week', {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
};

export const getSearchFilms = async query => {
  const response = await axios.get('search/movie', {
    params: {
      query: query,
      api_key: KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

export const getMovieById = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

export const getMovieCreditsById = async id => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

export const getMovieReviewsById = async id => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return response.data;
};
