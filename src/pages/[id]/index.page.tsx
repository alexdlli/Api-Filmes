import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getMovieDetails } from "../../utils/http";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Movie, Image } from "../../types";
import { Details, Similarly } from "../../components";
import { Container, Content, NextImage } from "./styles";

interface Props {
  dataMovie: Movie;
}

export default function DetailsPage({ dataMovie }: Props) {
  const [movie, setMovie] = useState<Movie>(dataMovie);

  const { query } = useRouter();
  const id = parseInt(query.id as string, 10);

  const { data } = useQuery(["movie", id], () => getMovieDetails(id), {
    initialData: movie,
  });

  useEffect(() => {
    if (data !== undefined) {
      const { image: img } = new Image(data.poster_path);
      setMovie({ ...data, image: img as string });
    }
  }, [data]);

  return (
    <Fragment>
      {movie.image === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Content>
            <NextImage
              src={movie.image}
              alt={movie.overview}
              width={300}
              height={450}
            />
            <Details
              title={movie.title}
              overview={movie.overview}
              releaseDate={movie.release_date}
            />
          </Content>
          <Similarly id={movie.id} />
        </Container>
      )}
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id as string;
  const dataMovie = await getMovieDetails(parseInt(id, 10));
  return {
    props: {
      dataMovie,
    } as Props,
  };
};
