import queryClient from "./queryClient";
import { getMovieDetails, getMovieSimilarly, getMovies } from "./http";

export async function handlePerfetchMovie(id: number) {
  await queryClient.prefetchQuery(
    ["movie", id],
    async () => await getMovieDetails(id),
    {
      staleTime: 1000 * 60,
    }
  );

  await queryClient.prefetchQuery(
    ["similarly", id],
    async () => await getMovieSimilarly(id),
    {
      staleTime: 1000 * 60,
    }
  );
}

export async function handlePerfetchMovies(page: number) {
  await queryClient.prefetchQuery(
    ["movies", page],
    async () => {
      return await getMovies(page);
    },
    {
      staleTime: 1000 * 60,
    }
  );
}
