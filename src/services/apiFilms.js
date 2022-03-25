import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export const getMovies = (page = 1) => {
  return api.get(`/movie/popular?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=${page}`).then(response => response.data)
};

export const getMovieSimilarly = (id) => {
  return api.get(`/movie/${id}/similar?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=1`).then(response => response.data)
};

export const getMovieDetails = (id) => {
  return api.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=1`).then(response => response.data)
};
