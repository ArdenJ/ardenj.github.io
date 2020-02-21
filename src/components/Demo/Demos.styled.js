import styled from 'styled-components'

export const StyledDemo = styled.div`
  background-color: ${({ theme }) => theme.bodyPrimary};
  position: relative;
  width: 95%;

  li {
    list-style: none;
  }

  a {
    font-weight: 900;
    color: ${({ theme }) => theme.textPrimary};
  }

  .animatedDiv {
    background-color: ${({ theme }) => theme.bodyPrimary};
    padding: 1.6rem;
    margin: 0 2rem 1.6rem 0;
    border: 5px solid ${({ theme }) => theme.textPrimary};
    box-shadow: 12px 12px 0 4px ${({ theme }) => theme.textPrimary};
    z-index: 10;
    top: 0;
    left: 0;
    width: auto;
  }

  @media ${({ theme }) => theme.screenWidth.medium} {
    width: 70%;
  }

  @media ${({ theme }) => theme.screenWidth.large} {
    max-width: 30vw;
  }
`

export const StyledDemoContainer = styled.section`
  box-sizing: border-box;
  height: auto;
  width: 100vw;
  padding: 2rem;
  margin: auto 0;
  display: grid;
  align-content: left;
  grid-template-rows: auto auto;
  grid-template-columns: 100%;

  h2 {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1.8rem;
    margin: 0 2rem 2rem 0;
    width: 100%;
  }

  .demos {
    width: auto;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.screenWidth.large} {
    width: 80vw;

    .demos {
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`
