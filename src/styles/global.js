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

  body {
    background: var(--black-100);
  }

  h1, h2, h3, h4 {
    color: var(--white);
  }

  p, span {
    color: var(---gray);
  }
  
  button, a {
    cursor: pointer;
  }
`

export default GlobalStyle
