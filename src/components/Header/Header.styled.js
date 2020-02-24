import styled from 'styled-components'

export const StyledHeader = styled.header`
  grid-area: header;
  font-weight: 900;
  margin: auto;
  line-height: 1;
  width: 100%;
  height: 100%;
  overflo: hidden;

  h1 {
    font-size: 2.6rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    line-height: 2rem;
    font-size: 1.8rem;
    width: 80%;
    margin: 0.4rem 0 0.8rem 0;
    color: ${({ theme }) => theme.textPrimary};
  }

  a {
    color: ${({ theme }) => theme.textSecondary};
  }

  @media ${({ theme }) => theme.screenWidth.medium} {
    p {
      width: 80%;
    }
  }

  @media ${({ theme }) => theme.screenWidth.large} {
    h1 {
      font-size: 3.8rem;
    }

    p {
      width: 70%;
    }
  }
`
