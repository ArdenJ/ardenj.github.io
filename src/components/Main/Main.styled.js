import styled from 'styled-components'

export const StyledMain = styled.main`
  display: grid;
  grid-template-areas: 'header section';
  overflow-x: hidden;
  align-items: center;
  background-color: ${({ theme }) => theme.bodyAccent};
  background-image: linear-gradient(40deg, #bb96bd, #9d679f);
  color: ${({ theme }) => theme.textDark};
  height: 100vh;
  width: 100vw;
  justify-content: center;
  text-rendering: optimizeLegibility;
`
