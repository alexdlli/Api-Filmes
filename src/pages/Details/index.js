import React from 'react';
import { Link, useParams } from 'react-router-dom'
import Similarly from '../../components/Similarly';
import { Container } from './styles';
import { getMovieDetails } from '../../services/apiFilms';
import { useQuery } from 'react-query'



function Details() {
  const image_path = 'https://image.tmdb.org/t/p/w500/'
  const { id } = useParams()

  const { data, isLoading } = useQuery([`movie/${id}`], () => getMovieDetails(id));

  const movie = {
    id: id,
    title: data?.title,
    overview: data?.overview,
    image: `${image_path}${data?.poster_path}`,
    releaseDate: data?.release_date,
  }

  if (isLoading || !movie) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <div className="movie">
        <img src={movie?.image} alt={movie?.overview} />
        <div className="details">
          <h1>{movie?.title}</h1>
          <span>Sinopse: {movie?.overview}</span>
          <span className='release_date'>Data de Lançamento: {movie?.releaseDate}</span>
          <Link to='/' >
            <button>Go Home</button>
          </Link>
        </div>
      </div>

      <Similarly movieId={movie.id} />
    </Container>
  );
}

export default Details;