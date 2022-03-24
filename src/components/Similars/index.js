import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movie } from '../../pages/Home/styles';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Container } from './styles';

function Similarly() {
  const { id } = useParams()
  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
    console.log(movies)
    console.log(id)
  }, [id, movies])


  return (
    <Container>
      <Swiper
        spaceBetween={1}
        slidesPerView={5}
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
    </Container>
  );
}

export default Similarly;