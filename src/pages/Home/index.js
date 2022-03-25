import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { getMovies } from '../../services/apiFilms';
import { useQuery } from 'react-query'
import { Container, MovieList, Movie, Pagination } from './styles';

function Home() {
  const [page, setPage] = useState(1)
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  const { data, isLoading } = useQuery(["movies", page], () => getMovies(page));
  const movies = data?.results

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

  if (isLoading) {
    return <h1>Loading...</h1>
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