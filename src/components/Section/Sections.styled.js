import styled from 'styled-components'

export const StyledSection = styled.section`
  grid-area: section;
  background-color: ${({ theme }) => theme.bodyLight};
  height: 90vh;
  width: calc(100vw / 2);
  box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.08);
`
