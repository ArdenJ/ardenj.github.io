import styled from 'styled-components'

export const StyledMain = styled.main`
  display: grid;
  grid-template-areas: 'header section';
  overflow-x: hidden;
  align-items: center;
  color: ${({ theme }) => theme.textLink};
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  text-rendering: optimizeLegibility;
`
