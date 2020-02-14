import styled from 'styled-components'

export const StyledContainer = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.bodyPrimary};

  display: grid;
`
