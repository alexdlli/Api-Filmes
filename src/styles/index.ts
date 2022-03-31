import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #eeeef2;
    --purple: #9f7aea;
    --black:  #181b23;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "League Spartan";
}

body {
    background-color: var(--black);
    color: var(--white);
    padding: 2rem;
}
`;
