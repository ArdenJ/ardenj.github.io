import styled from 'styled-components'

export const StyledLink = styled.button`
  background-color: transparent;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.8rem 1.2rem;
  border: 4px solid ${({ theme }) => theme.textLight};
  color: ${({ theme }) => theme.textLight};

  &:first-child {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }
`
