import styled from 'styled-components'

export const StyledSection = styled.section`
  grid-area: section;
  background-color: ${({ theme }) => theme.bodyAccent2};
  height: 90vh;
  width: calc(100vw / 2);
  /* box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.5); */
`
