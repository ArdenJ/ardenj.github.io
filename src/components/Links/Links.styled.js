import styled from 'styled-components'

export const StyledLinkContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
  width: 60%;

  @media ${({ theme }) => theme.screenWidth.medium} {
    width: 70%;
  }

  @media ${({ theme }) => theme.screenWidth.large} {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textLight};
    cursor: pointer;
  }
`

export const StyledLink = styled.button`
  background-color: transparent;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.8rem 1.2rem;
  margin: 0 0.6rem 0.4rem 0;
  border: 4px solid ${({ theme }) => theme.textLight};
  color: ${({ theme }) => theme.textLight};
`
