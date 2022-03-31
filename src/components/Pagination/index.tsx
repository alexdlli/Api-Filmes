import { Button, Container } from "./styles";
import { usePage } from "../../hooks";
import { handlePerfetchMovies } from "../../utils/handlerPrefetch";

function Pagination() {
  const { page, setPage } = usePage();
  function handleChangeBackPage() {
    if (page !== 1) {
      setPage(page - 1);
    }
    return;
  }

  function handleChangeNextPage() {
    setPage(page + 1);
  }

  return (
    <Container>
      <Button
        onClick={handleChangeBackPage}
        onMouseEnter={() => handlePerfetchMovies(page >= 2 ? page - 1 : 1)}
        disabled={page === 1}
      >
        Previews Page
      </Button>
      <Button
        onClick={handleChangeNextPage}
        onMouseEnter={() => handlePerfetchMovies(page <= 20 ? page + 1 : 20)}
        disabled={page === 20}
      >
        Next Page
      </Button>
    </Container>
  );
}

export { Pagination };
