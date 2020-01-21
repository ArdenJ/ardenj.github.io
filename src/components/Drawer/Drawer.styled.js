import styled from 'styled-components'

const drawerWidth = '30vw'

export const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(0%)')};
  background: #202020;
  color: white;
  height: 100vh;
  width: ${drawerWidth};
  transition-duration: 0.3s;
  grid-template-areas:
    'controls'
    'body'
    'links';

  .drawerButton {
    grid-area: controls;
    background: #fff;
    border: none;
    font-weight: 700;
    font-size: 2.6rem;
    padding: 0 0.8rem;
    margin: 1rem;
  }

  .demos {
    grid-area: body;
    padding: 2rem;

    & li {
      text-decoration: none;
    }
  }
`
