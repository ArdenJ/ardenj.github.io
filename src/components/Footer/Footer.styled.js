import styled from 'styled-components'

export const StyledFooter = styled.section`
  height: 100%;
  width: 100%;
  padding: 1.6rem 2rem 1.6rem 0;
  background-color: ${({ theme }) => theme.bodyAccent1};
  color: ${({ theme }) => theme.textLight};

  .wrapper {
    display: grid;
    grid-template-areas:
      'about'
      'copyright';
    max-width: 80%;

    & :first-child {
      margin-bottom: 1rem;
    }
  }

  .copyright {
    font-weight: bold;
  }
`
