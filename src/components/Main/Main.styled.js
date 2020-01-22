import styled from 'styled-components'

export const StyledMain = styled.main`
  display: grid;
  grid-template-areas: 'header section';
  overflow-x: hidden;
  align-items: center;
  background-color: ${({ theme }) => theme.bodyAccent};
  background-image: linear-gradient(40deg, #ff0500, #b00b1e);
  color: ${({ theme }) => theme.textLight};
  height: 100vh;
  width: 100vw;
  justify-content: center;
  text-rendering: optimizeLegibility;
`
