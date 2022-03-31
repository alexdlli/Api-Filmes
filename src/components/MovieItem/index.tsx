import Link from "next/link";
import { handlePerfetchMovie } from "../../utils/handlerPrefetch";
import { Item, NextImage, Span } from "./styles";

interface Props {
  id: number;
  title: string;
  image: string;
}

function MovieItem({ id, title, image }: Props) {
  return (
    <Item key={id}>
      <Link href={id.toString()}>
        <a>
          <NextImage
            src={image}
            alt={title}
            width={300}
            height={450}
            onMouseEnter={() => handlePerfetchMovie(id)}
          />
        </a>
      </Link>
      <Span>{title}</Span>
    </Item>
  );
}

export { MovieItem };
export type { Props as MovieItemProps };
