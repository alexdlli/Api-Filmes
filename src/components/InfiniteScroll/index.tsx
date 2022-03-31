import { useEffect, useRef } from "react";
import { usePage } from "../../hooks";
import { Loading } from "./styles";

function InfiniteScroll() {
  const { setPage } = usePage();
  const loaderRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setPage((page) => page + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

  return <Loading ref={loaderRef}>Carregando mais episodios...</Loading>;
}

export { InfiniteScroll };
