import styled from 'styled-components'

export const StyledMain = styled.main`
  overflow-x: hidden;
  align-items: center;
  background-color: ${({ theme }) => theme.bodyPrimary};
  color: ${({ theme }) => theme.textPrimary};
  min-height: 50vh;
  width: 100vw;
  justify-content: center;
  text-rendering: optimizeLegibility;
  padding: 2rem;
  overflow: hidden;

  @media ${({ theme }) => theme.screenWidth.medium} {
    margin: 0 auto;
    min-height: 40vh;
  }
  @media ${({ theme }) => theme.screenWidth.large} {
    max-width: 100vw;
    min-height: 30vh;
  }
`