import React, { useEffect, useState } from 'react';

import { Container, MovieList, Movie } from './styles';

function Home() {
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=en-US&page=1`)
      .then(respone => respone.json())
      .then(data => setMovies(data.results))

  }, [])

  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/'
  console.log(movies)

  return (
    <Container>
      <h1>Movies</h1>

      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <a href="/">
                <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
              </a>
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  );
}

export default Home;