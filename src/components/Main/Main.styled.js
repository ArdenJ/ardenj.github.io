import styled from 'styled-components'

export const StyledMain = styled.main`
  display: grid;
  grid-template-areas: 'header section';
  overflow-x: hidden;
  align-items: center;
  background: ${({ theme }) => theme.bodyDark};
  color: ${({ theme }) => theme.textLight};
  display: flex;
  height: 100vh;
  justify-content: center;
  text-rendering: optimizeLegibility;
`
