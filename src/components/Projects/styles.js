import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 6.8rem;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 2rem;
`

export const Card = styled.a`
  padding: 0.8rem 1.1rem;
  width: 20.8rem;

  border: 1px solid #333333;
  background: var(--black-50);
  text-decoration: none;

  @media (max-width: 1024px) {
    width: 18rem;
  }

  @media (max-width: 425px) {
    width: 20.8rem;
  }
`

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 9rem;
  border: 1px solid #333333;
`

export const Name = styled.h4`
  margin-top: 0.8rem;
  font-size: 1rem;
  font-weight: 500;
`

export const Tecnologies = styled.span`
  margin-top: 0.4rem;
  font-size: 0.75rem;
`
