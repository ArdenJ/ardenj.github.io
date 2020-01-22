import styled from 'styled-components'

export const StyledDrawer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  background: ${({ theme }) => theme.bodyDark};
  color: ${({ theme }) => theme.textLight};
  height: 100vh;
  width: 100vw;
  transition-duration: 0.3s;
  grid-template-areas:
    'controls'
    'body'
    'links';

  @media screen and (min-width: 424px) {
    width: 60vw;
  }

  @media ${({ theme }) => theme.screenWidth.large} {
    width: 30vw;
  }

  .drawerButton {
    grid-area: controls;
    background: transparent;
    border: none;
    font-weight: 700;
    font-size: 2.6rem;
    padding: 0 0.8rem;
    margin: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.textLight};
    transition-duration: 0.3s;

    &:hover {
      transform: rotate(180deg);
      transition-duration: 0.3s;
    }
  }

  .demos {
    grid-area: body;
    padding: 2rem;
  }
`

export const StyledDemo = styled.div`
  padding: 0.5rem 0;
  border-top: 2px solid white;
  width: 80%;
  transition-delay: 0.1s;
  transition-duration: 0.2s;

  &:hover {
    transform: translateX(-1rem);
    transition-duration: 0.3s;
  }

  li {
    list-style: none;
    font-size: 1rem;
    padding: 0 0 0.1rem;
    font-weight: 700;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition-delay: 0.1s;
    transition-duration: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.bodyAccent};
      transition-duration: 0.3s;
    }
  }
`
