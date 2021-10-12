import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  background: var(--black-50);
`

export const Content = styled.div``

export const Text = styled.span`
  font-size: 0.85rem;
  color: ${props => props.color};
`
