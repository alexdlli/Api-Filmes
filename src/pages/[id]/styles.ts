import styled from "styled-components";
import Image from "next/image";

export const Container = styled.section`
  padding: 4rem 0;

  h1 {
    margin: 3rem 0;
  }
`;

export const Content = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const NextImage = styled(Image)`
  border-radius: 1rem;
`;
