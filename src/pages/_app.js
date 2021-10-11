import GlobalStyle from '../styles/global'

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default MyApp
