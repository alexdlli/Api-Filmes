import { useState, useEffect, Fragment } from "react";
import { Movies, Movie } from "../types";
import { getMovies } from "../utils/http";
import { useQuery } from "react-query";
import { Pagination, MovieList, Heading } from "../components";
import { usePage } from "../hooks";

interface Props {
  movies: Movies;
}

export default function Home({ movies }: Props) {
  const { page } = usePage();
  const { data } = useQuery(["movies", page], () => getMovies(page), {
    initialData: movies,
  });

  return (
    <Fragment>
      {data === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          <Heading>Movies</Heading>
          <MovieList movies={data.results} />
          <Pagination />
        </Fragment>
      )}
    </Fragment>
  );
}

export async function getServerSideProps() {
  const movies = await getMovies(1);
  return {
    props: {
      movies,
    } as Props,
  };
}
