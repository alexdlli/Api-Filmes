import styled from "styled-components";

export const Heading = styled.h1`
  margin: 3rem 0;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem;
  max-width: 50%;

  @media (max-width: 800px) {
    align-items: center;
    margin-left: 0;
  }
`;

export const Span = styled.span`
  line-height: 130%;
  margin-bottom: 1rem;
  font-size: 110%;
`;

export const SpanReleaseDate = styled(Span)`
  opacity: 0.5;
`;

export const Button = styled.button`
  background: var(--purple);
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: var(--white);
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  font-size: 100%;
  transition: all 0.3s;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.5);
  }
`;
