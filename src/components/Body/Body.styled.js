import styled from 'styled-components'

export const StyledBody = styled.main`
  padding: 2rem;
  max-width: 80%;

  ul {
    list-style: none;
    display: inline-flex;
    flex-direction: row;

    > li {
      padding: 1rem 1rem 0 0;
    }

    button {
      background: none;
      border: none;
      text-decoration: underline;
      cursor: pointer;
    }

    button, a {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 1rem;
      transition-duration: 0.5s;
    }

    button:hover, a:hover {
    transition-duration: 0.6s;
    transition-delay: 0.4s;
    text-decoration: underline;
    }
  }

  @media screen and ${({ theme }) => theme.screenWidth.large} {
    max-width: 64%;
  }

  @media screen and (min-width: 1000px){
    max-width: 50%;
  }

`
