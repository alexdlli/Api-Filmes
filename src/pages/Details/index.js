import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
// import { Container } from './styles';

function Details() {

  const [movie, setMovie] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=pt-BR&page=1`)
      .then(respone => respone.json())
      .then(data =>
        setMovie(data))
  }, [])

  return (
    <h1>{JSON.stringify(movie)}</h1>
  );
}

export default Details;