import { Movie, Image } from "../../types";
import { MovieItem } from "../MovieItem";
import { List } from "./styles";
import type { Key } from "react";

interface Props {
  movies: Movie[];
}

function MovieList({ movies }: Props) {
  return (
    <List>
      {movies.map((movie: Movie, index: Key) => {
        const { image } = new Image(movie.poster_path);
        return (
          <MovieItem
            key={index}
            id={movie.id}
            image={image}
            title={movie.title}
          />
        );
      })}
    </List>
  );
}

export { MovieList };
export type { Props as MovieListProps };
