import styled from 'styled-components'

export const StyledFooter = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.bodyMid};
  color: ${({ theme }) => theme.textLight};
  font-size: 1.1rem;

  .wrapper {
    display: grid;
    padding: 1.6rem 2rem;
    grid-template-areas:
      'about'
      'copyright';
    max-width: 100%;

    & :first-child {
      margin-bottom: 1rem;
    }
  }

  .copyright {
    font-weight: bold;
  }

  @media ${({ theme }) => theme.screenWidth.medium} {
    .wrapper {
      width: 80%;
    }
  }
`
