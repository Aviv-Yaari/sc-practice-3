import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle<{ theme: any }>`
  ${reset}

  * {
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: 100%;
  }

  body {
      font-family: 'Red Hat Display', sans-serif;
      font-family: 'Barlow', sans-serif;
      font-weight: 600;
  }

  p {
    line-height: 1.5;
  }

  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 3em;
    letter-spacing: 14px;
    font-family: 'Fraunces', serif;
    text-transform: uppercase;
  }

  h3 {
    font-size: 2em;
    font-weight: 700;
    font-family: 'Fraunces', serif;
  }

  h4 {
    font-size: 1.5em;
    font-weight: 700;
    font-family: 'Fraunces', serif;
  }
`;
