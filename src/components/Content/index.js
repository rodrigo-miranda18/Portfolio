import AboutMe from '../AboutMe'
import Contact from '../Contact'
import Presentation from '../Presentation'
import Skills from '../Skills'
import { Container } from './styles'

const Content = () => {
  return (
    <Container>
      <Presentation />
      <AboutMe />
      <Contact />
      <Skills />
    </Container>
  )
}

export default Content
