import { Fragment } from "react";
import { Movies } from "../types";
import { getMovies } from "../utils/http";
import { useQuery } from "react-query";
import { MovieList, Heading } from "../components";
import { usePage } from "../hooks";
import dynamic from "next/dynamic";
import { useWindowsIsDesktop } from "../hooks";

const Pagination = dynamic<EmptyObject>(() =>
  import("../components/Pagination").then((module) => module.Pagination)
);

const InfiniteScroll = dynamic<EmptyObject>(() =>
  import("../components/InfiniteScroll").then((module) => module.InfiniteScroll)
);

interface Props {
  movies: Movies;
}

export default function Home({ movies }: Props) {
  const { page } = usePage();
  const { data } = useQuery(["movies", page], () => getMovies(page), {
    initialData: movies,
  });

  const isDesktop = useWindowsIsDesktop();

  return (
    <Fragment>
      {data === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          <Heading>Movies</Heading>
          <MovieList movies={data.results} />
          {isDesktop ? <Pagination /> : <InfiniteScroll />}
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
