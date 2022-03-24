import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }

`;

export const MovieList = styled.ul`

  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1)
  }

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }
`


export const Pagination = styled.div`
  padding: 4rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  button {
  background: #6654da;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  font-size: 100%;
  transition: all 0.3s;
}

button:hover {
  filter: brightness(0.8);
}

button:active {
  filter: brightness(0.5);
}
`

