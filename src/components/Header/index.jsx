import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'

import {
  Container,
  Title,
  IconContainer,
  Links,
  CloseButtonContainer,
  Link
} from './styles'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Title>Portfólio</Title>

      <IconContainer onClick={() => setIsOpen(true)}>
        <BiMenu size={38} color="white" />
      </IconContainer>

      <Links isOpen={isOpen}>
        {isOpen && (
          <CloseButtonContainer
            isOpen={isOpen}
            onClick={() => setIsOpen(false)}
          >
            <IoIosClose size={30} color="var(--gray)" />
          </CloseButtonContainer>
        )}

        <Link href="#about">Sobre Mim</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projetos</Link>
      </Links>
    </Container>
  )
}

export default Header
