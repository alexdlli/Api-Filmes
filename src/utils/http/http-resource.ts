import { AxiosResponse } from "axios";
import { Movie, Movies } from "../../types";
import { httpVideo, apiKey } from "./axiosBase";

export function getMovies(page: number): Promise<Movies> {
  return httpVideo
    .get<Movies>(`/popular?api_key=${apiKey}&language=pt-BR&page=${page}`)
    .then(({ data }: AxiosResponse<Movies>) => data);
}

export function getMovieSimilarly(id: number): Promise<Movies> {
  return httpVideo
    .get<Movies>(`/${id}/similar?api_key=${apiKey}&language=pt-BR&`)
    .then(({ data }: AxiosResponse<Movies>) => data);
}

export function getMovieDetails(id: number): Promise<Movie> {
  return httpVideo
    .get<Movie>(`/${id}?api_key=${apiKey}&language=pt-BR&page=1`)
    .then(({ data }: AxiosResponse<Movie>) => data);
}
