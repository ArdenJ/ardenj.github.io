import styled from 'styled-components'

export const StyledHeader = styled.header`
  grid-area: header;
  max-width: 80vw;
  font-weight: 900;
  margin: auto;
  line-height: 1;

  h1 {
    font-size: 2.6rem;
  }

  p {
    line-height: 2rem;
    font-size: 1.8rem;
    width: 80%;
    margin: 0.4rem 0 0.8rem 0;
  }

  .demoButton {
    background: ${({ theme }) => theme.bodyLight};
    border: none;
    color: ${({ theme }) => theme.textAccent};
    text-decoration: none;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.screenWidth.medium} {
    width: 60vw;

    p {
      width: 80%;
    }
  }

  @media ${({ theme }) => theme.screenWidth.large} {
    width: 60vw;

    h1 {
      font-size: 3.8rem;
    }

    p {
      width: 70%;
    }
  }
`
