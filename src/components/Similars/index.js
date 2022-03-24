import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movie } from '../../pages/Home/styles';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Container } from './styles';

function Similarly() {
  const [isDesktop, setDesktop] = useState(true);
  const minDesktopSize = 1300;
  const { id } = useParams()
  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/';
  const isMountedRef = useRef(null);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [width] = useWindowSize()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(
        data => setMovies(data.results),
        isMountedRef.current = false,
      )

    if (minDesktopSize > width) {
      setDesktop(false)
    } else {
      setDesktop(true)
    }

  }, [id, movies, width])

  return (
    <Container>
      <h1>Similares</h1>

      {!isDesktop &&
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
        >
          {movies.map(movie => {
            return (
              <SwiperSlide key={movie.id}>
                <Movie >
                  <Link to={`/details/${movie.id}`}>
                    <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                  </Link>
                  <span>{movie.title}</span>
                </Movie>
              </SwiperSlide>
            )
          })}
        </Swiper>}

      {isDesktop &&
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
        >
          {movies.map(movie => {
            return (
              <SwiperSlide key={movie.id}>
                <Movie >
                  <Link to={`/details/${movie.id}`}>
                    <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                  </Link>
                  <span>{movie.title}</span>
                </Movie>
              </SwiperSlide>
            )
          })}
        </Swiper>
      }


    </Container>
  );
}

export default Similarly;