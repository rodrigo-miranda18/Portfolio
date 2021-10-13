import AboutMe from '../AboutMe'
import Contact from '../Contact'
import Presentation from '../Presentation'
import { Container } from './styles'

const Content = () => {
  return (
    <Container>
      <Presentation />
      <AboutMe />
      <Contact />
    </Container>
  )
}

export default Content
