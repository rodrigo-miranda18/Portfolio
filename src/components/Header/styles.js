import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 2;

  width: 100%;
  height: 6rem;
  padding: 0 9.25rem;
  background: var(--black-100);

  @media (max-width: 880px) {
    padding: 0 7rem;
  }

  @media (max-width: 650px) {
    padding: 0 4rem;
  }

  @media (max-width: 425px) {
    padding: 0 2rem;
  }
`

export const Title = styled.h2``

export const IconContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;

  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${props => (props.isOpen ? '100%' : '0')};
    height: 100%;
    background: var(--black-50);
    overflow: hidden;
    box-shadow: 0px 0px 15px -4px #000000;

    position: fixed;
    top: 0;
    right: 0;
    transition: 0.4s;
  }
`

export const CloseButtonContainer = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  margin: 5px 7px 0 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const Link = styled.a`
  color: var(--gray);
  font-size: 0.9rem;
  text-decoration: none;

  :hover {
    transition: 0.4s;
    color: var(--purple);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`
