import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4.25rem 9.25rem;

  @media (max-width: 880px) {
    padding: 4.25rem 7rem;
  }

  @media (max-width: 650px) {
    padding: 4.25rem 4rem;
  }

  @media (max-width: 425px) {
    padding: 4.25rem 2rem;
  }
`
