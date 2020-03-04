import styled from 'styled-components'

export const StyledTitle = styled.main`
  padding: 2rem;
  width: 100vw;

  h1 {
    width: 100%;
    font-size: 6rem;
    font-weight: 900;
    background-image: repeating-linear-gradient(
    -45deg,
    #191414,
    #191414 6px,
    #fff 3px,
    #fff 10px
  );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and ${({ theme }) => theme.screenWidth.medium} {
    font-size: 8rem;
    min-width: 40vw;
  }
  @media screen and ${({ theme }) => theme.screenWidth.large} {
    font-size: 8rem;
    max-width: 50vw;
    text-align: right;
  }
`
