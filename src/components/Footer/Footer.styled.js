import styled from 'styled-components'

export const StyledFooter = styled.footer`
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
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
`
