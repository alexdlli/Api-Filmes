import Link from "next/link";
import { Container, Button, Span, SpanReleaseDate, Heading } from "./styles";

interface Props {
  title: string;
  overview: string;
  releaseDate: string;
}

function Details({ title, overview, releaseDate }: Props) {
  const data = new Date(releaseDate.replace(/[-]+/g, "/")).toLocaleDateString(
    "pt-BR"
  );
  return (
    <Container>
      <Heading>{title}</Heading>
      <Span>Sinopse: {overview}</Span>
      <SpanReleaseDate>Data de Lançamento: {data}</SpanReleaseDate>
      <Link href="/" passHref>
        <Button>Go Home</Button>
      </Link>
    </Container>
  );
}

export { Details };
export type { Props as DetailsProps };
