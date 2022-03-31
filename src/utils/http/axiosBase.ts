import axios from "axios";

export const httpVideo = axios.create({
  baseURL: process.env.NEXT_PUBLIC_THE_MOVIE_DB as string,
});

export const apiKey = process.env.NEXT_PUBLIC_THE_MOVIE_DB_KEY as string;
