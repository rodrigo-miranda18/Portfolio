import Image from 'next/image'

import {
  Container,
  Title,
  Cards,
  Card,
  Thumbnail,
  Name,
  Tecnologies
} from './styles'

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Brawl Stars Stats',
      thumbnailPath: '/images/projects/brawlstarsstats.png',
      tecnologiesDescription: 'JS, NextJS e Styled-Components',
      url: 'https://github.com/rodrigo-miranda18/BrawlStars-Stats'
    },
    {
      id: 2,
      name: 'Covid-19 Dashboard',
      thumbnailPath: '/images/projects/coviddashboard.png',
      tecnologiesDescription: 'JS, ReactJS e Styled-Components',
      url: 'https://github.com/rodrigo-miranda18/covid19-dashboard'
    },
    {
      id: 3,
      name: 'Podcastr',
      thumbnailPath: '/images/projects/podcastr.png',
      tecnologiesDescription: 'TS, NextJS e Styled-Components',
      url: 'https://github.com/rodrigo-miranda18/podcastr-NLW5'
    }
  ]

  return (
    <Container>
      <Title>Projetos</Title>

      <Cards>
        {projects.map(project => {
          return (
            <Card href={project.url} target="_blank" key={project.id}>
              <Thumbnail>
                <Image
                  src={project.thumbnailPath}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  unoptimized={true}
                />
              </Thumbnail>
              <Name>{project.name}</Name>
              <Tecnologies>{project.tecnologiesDescription}</Tecnologies>
            </Card>
          )
        })}
      </Cards>
    </Container>
  )
}

export default Projects
