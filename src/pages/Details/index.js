import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Similarly from '../../components/Similars';
import { Container } from './styles';

function Details() {
  const [movie, setMovie] = useState({});
  const image_path = 'https://image.tmdb.org/t/p/w500/'
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => {
        const { title, overview, poster_path, release_date } = data

        const movie = {
          id,
          title,
          overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        }

        setMovie(movie)
      })
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.overview} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.overview}</span>
          <span className='release_date'>Data de Lançamento: {movie.releaseDate}</span>
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