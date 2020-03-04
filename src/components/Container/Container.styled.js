import styled from 'styled-components'

export const StyledContainer = styled.main`
  background-color: ${({ theme }) => theme.bodyPrimary};
  margin: auto;
  display: grid;


  @media screen and ${({ theme }) => theme.screenWidth.large} {
    grid-template-columns: auto auto;
  }
`
