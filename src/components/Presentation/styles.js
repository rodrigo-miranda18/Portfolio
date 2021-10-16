import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3.5rem;
  gap: 14rem;

  @media (max-width: 1024px) {
    gap: 3rem;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 19.5rem;
  gap: 1.8rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    align-items: center;
  }
`

export const RightSide = styled.div`
  position: relative;
  width: 19rem;
  height: 14rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Title = styled.h1`
  @media (max-width: 425px) {
    text-align: center;
  }
`

export const Description = styled.p``

export const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  border: 1px solid #333333;

  background: var(--purple);
`

export const Link = styled.a`
  color: var(--white);
  text-decoration: none;
`
