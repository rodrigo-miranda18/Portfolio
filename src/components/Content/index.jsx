import AboutMe from '../AboutMe'
import Contact from '../Contact'
import Presentation from '../Presentation'
import Projects from '../Projects'
import Skills from '../Skills'
import { Container } from './styles'

const Content = () => {
  return (
    <Container>
      <Presentation />
      <AboutMe />
      <Contact />
      <Skills />
      <Projects />
    </Container>
  )
}

export default Content
