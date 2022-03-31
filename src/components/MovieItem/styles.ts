import styled from "styled-components";
import Image from "next/image";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

export const NextImage = styled(Image)`
  border-radius: 1rem;
`;

export const Span = styled.span`
  margin-top: 2rem;
  font-weight: bold;
  font-size: 120%;
  text-align: center;
`;
