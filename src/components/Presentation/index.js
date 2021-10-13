import Image from 'next/image'

import {
  Container,
  LeftSide,
  RightSide,
  Title,
  Description,
  Button,
  Link
} from './styles'

const Presentation = () => (
  <Container>
    <LeftSide>
      <Title>Olá, eu sou o Rodrigo Miranda :)</Title>
      <Description>Desenvolvedor Front-End</Description>
      <Button>
        <Link
          href="https://www.linkedin.com/in/rodrigoamiranda/"
          target="_blank"
        >
          Entre em contato
        </Link>
      </Button>
    </LeftSide>

    <RightSide>
      <Image
        src="/images/computer-illustration.png"
        alt="Computer illustration"
        width="300"
        height="222.78"
        layout="fill"
        objectFit="cover"
        unoptimized={true}
      />
    </RightSide>
  </Container>
)

export default Presentation
