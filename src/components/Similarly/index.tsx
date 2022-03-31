import { useEffect, useState, Key, Fragment } from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { MovieItem, Heading } from "../../components";
import { Container } from "./styles";
import { Movie, Image } from "../../types";
import { getMovieSimilarly } from "../../utils/http";
import { useWindowsWidth } from "../../hooks";

interface Props {
  id: number;
}

function Similarly({ id }: Props) {
  const [isDesktop, setDesktop] = useState(true);
  const minDesktopSize = 1300;

  const width = useWindowsWidth();

  useEffect(() => {
    if (minDesktopSize > width) {
      setDesktop(false);
    } else {
      setDesktop(true);
    }
  }, [id, width]);

  const { data, isLoading } = useQuery(["similarly", id], () =>
    getMovieSimilarly(id)
  );

  return (
    <Fragment>
      {isLoading || !data?.results ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Heading>Similares</Heading>
          <Swiper
            spaceBetween={!isDesktop ? 10 : 50}
            slidesPerView={!isDesktop ? 1 : 4}
          >
            {data?.results.map((movie: Movie, index: Key) => {
              const { image } = new Image(movie.poster_path);
              return (
                <SwiperSlide key={movie.id}>
                  <MovieItem
                    id={movie.id}
                    image={image}
                    title={movie.title}
                    key={index}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      )}
    </Fragment>
  );
}

export { Similarly };
