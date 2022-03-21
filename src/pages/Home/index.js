import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { Container, MovieList, Movie } from './styles';

function Home() {
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=1`)
      .then(respone => respone.json())
      .then(data => setMovies(data.results))
  }, [])

  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  return (
    <Container>
      <h1>Movies</h1>

      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  );
}

export default Home;