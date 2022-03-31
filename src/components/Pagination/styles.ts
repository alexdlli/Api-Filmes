import styled from "styled-components";

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

export const Container = styled.div`
  padding: 4rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
