import Image from 'next/image'

import { Container, Card, Link, Avatar, Name, AccountName } from './styles'

const Contact = () => {
  const contactData = [
    {
      id: 1,
      name: 'E-mail',
      accountName: 'rodrigo.mira08@gmail.com',
      link: 'mailto:rodrigo.mira08@gmail.com',
      path: '/images/contact/mail.svg'
    },
    {
      id: 2,
      name: 'Linkedin',
      accountName: 'rodrigoamiranda',
      link: 'https://www.linkedin.com/in/rodrigoamiranda/',
      path: '/images/contact/linkedin.svg'
    },
    {
      id: 3,
      name: 'Github',
      accountName: 'rodrigo-miranda18',
      link: 'https://github.com/rodrigo-miranda18/',
      path: '/images/contact/github.svg'
    },
    {
      id: 4,
      name: 'Instagram',
      accountName: '@rodri_go_miranda',
      link: 'https://www.instagram.com/rodri_go_miranda/',
      path: '/images/contact/instagram.svg'
    }
  ]

  return (
    <Container>
      {contactData.map(network => (
        <Card key={network.id}>
          <Link href={network.link} target="_blank">
            <Avatar>
              <Image
                src={network.path}
                alt={network.accountName}
                width="32"
                height="32"
              />
            </Avatar>
            <Name>{network.name}</Name>
            <AccountName>{network.accountName}</AccountName>
          </Link>
        </Card>
      ))}
    </Container>
  )
}

export default Contact
