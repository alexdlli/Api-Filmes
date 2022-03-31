import { createContext, useContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

interface Props {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

type PageProviderProps = {
  children: ReactNode;
};

const PageContext = createContext({ page: 1 } as Props);

function PageProvider({ children }: PageProviderProps) {
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}

const usePage = () => useContext(PageContext);

export { PageProvider, PageContext, usePage };
export type { Props as PageContextProps };
