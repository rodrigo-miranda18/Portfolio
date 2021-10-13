import Image from 'next/image'

import { Container, Title, Cards, Card } from './styles'

const Skills = () => {
  const cards = [
    {
      id: 1,
      name: 'Javascript',
      path: '/images/skills/javascript.svg'
    },
    {
      id: 2,
      name: 'Typescript',
      path: '/images/skills/typescript.svg'
    },
    {
      id: 3,
      name: 'ReactJS',
      path: '/images/skills/react.svg'
    },
    {
      id: 4,
      name: 'NextJS',
      path: '/images/skills/nextjs.svg'
    },
    {
      id: 5,
      name: 'NodeJS',
      path: '/images/skills/nodejs.svg'
    },
    {
      id: 6,
      name: 'Git',
      path: '/images/skills/git.svg'
    }
  ]

  return (
    <Container>
      <Title>Skills</Title>
      <Cards>
        {cards.map(card => (
          <Card key={card.id}>
            <Image src={card.path} alt={card.name} width="80" height="80" />
          </Card>
        ))}
      </Cards>
    </Container>
  )
}

export default Skills
