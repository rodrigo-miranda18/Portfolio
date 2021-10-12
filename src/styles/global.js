import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }

  :root {
    --black-100: #171717;
    --black-50: #212121;

    --purple: #6600CC;

    --gray: #828282;
    --white: #fff;
  }

  @media (max-width: 2600px) {
    html {
      font-size: 150%;
    }
  }

  @media (max-width: 2000px) {
    html {
      font-size: 125%;
    }
  }

  @media (max-width: 1740px) {
    html {
      font-size: 100%;
    }
  }

  @media (max-width: 1024px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--black-100);
  }

  h1, h2, h3, h4 {
    color: var(--white);
  }

  p, span {
    color: var(--gray);
  }
  
  button, a {
    cursor: pointer;
  }
`

export default GlobalStyle
