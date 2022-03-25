import axios from '@/axios';

export const getMovies = ({ page = 1 }) => axios.get(`/movie/popular?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=${page}`);

export const getMovieSimilarly = ({ page = 1, id }) => axios.get(`/movie/${id}/similar?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=${page}`);

export const getMovieDetails = id => axios.get(`/movie/${id})movie/${id}?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=1`);

