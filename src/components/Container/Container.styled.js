import styled from 'styled-components'

export const StyledContainer = styled.main`
  background-color: ${({ theme }) => theme.bodyPrimary};
  margin: auto;
  display: grid;


  @media screen and ${({ theme }) => theme.screenWidth.large} {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 15vh;
  }
  @media screen and (min-width: 2000px) {
    padding-top: 20vh;
  }
`
