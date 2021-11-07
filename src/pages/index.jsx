import Head from 'next/head'

import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => (
  <>
    <Head>
      <title>Rodrigo Miranda</title>
    </Head>

    <Header />
    <Content />
    <Footer />
  </>
)

export default Home
