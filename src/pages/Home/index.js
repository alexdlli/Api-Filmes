import React from 'react';

import { Container, MovieList, Movie } from './styles';

function Home() {

  const movies = [
    {
      id: 1,
      title: 'spider-man',
      image_url: 'https://img.elo7.com.br/product/zoom/3E882CA/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-1-poster-geek.jpg'
    },
    {
      id: 2,
      title: 'spider-man',
      image_url: 'https://img.elo7.com.br/product/zoom/3E882CA/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-1-poster-geek.jpg'
    },
    {
      id: 3,
      title: 'spider-man',
      image_url: 'https://img.elo7.com.br/product/zoom/3E882CA/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-1-poster-geek.jpg'
    }
  ]

  return (
    <Container>
      <h1>Movies</h1>

      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <a href="/">
                <img src={movie.image_url} alt={movie.title} />
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