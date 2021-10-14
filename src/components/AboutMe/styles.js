import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 42rem;
  margin-top: 6rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h2`
  margin-bottom: 1.9rem;
`

export const Text = styled.p`
  text-align: center;
  line-height: 1.7rem;
  font-size: 0.85rem;
`
