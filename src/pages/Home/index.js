import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { Container, MovieList, Movie, Pagination } from './styles';

function Home() {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=${page}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [page])

  function handleChangeBackPage() {
    if (page !== 1) {
      setPage(page - 1)
    } else {
      return
    }
  }

  function handleChangeNextPage() {
    setPage(page + 1)
  }

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

      <Pagination>
        <button onClick={handleChangeBackPage}>Previews Page</button>
        <button onClick={handleChangeNextPage}> Next Page</button>
      </Pagination>
    </Container >
  );
}

export default Home;