import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 5rem;

  @media (max-width: 660px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.li`
  width: 12.5rem;
  list-style: none;

  :hover {
    margin-top: -7px;
  }

  @media (max-width: 768px) {
    width: 10rem;
    margin-bottom: 50px;
  }
`

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
`

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 62px;
  height: 62px;
  border-radius: 100%;
  background: var(--black-50);
`

export const Name = styled.h4`
  margin-top: 18px;
`

export const AccountName = styled.span`
  font-size: 0.8rem;
  margin-top: 5px;

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`
