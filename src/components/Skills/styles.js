import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 6rem;
`

export const Title = styled.h2`
  text-align: center;
`

export const Cards = styled.li`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;
  gap: 2rem;

  @media (max-width: 1240px) {
    gap: 0;
    flex-wrap: wrap;
    width: 75%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 565px) {
    width: 90%;
  }

  @media (max-width: 390px) {
    width: 100%;
  }

  @media (max-width: 360px) {
    justify-content: center;
  }
`

export const Card = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  background: var(--black-50);
  border: 1px solid #333333;

  list-style: none;

  :hover {
    background: #262626;
  }

  @media (max-width: 360px) {
    width: 190px;
    height: 190px;
  }
`
