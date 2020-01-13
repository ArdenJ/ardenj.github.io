import styled from 'styled-components'

export const StyledSection = styled.section`
  grid-area: section;
  overflow-x: scroll;
  display: inline-flex;
  background-color: ${({ theme }) => theme.bodyLight};
  background-image: repeating-linear-gradient(
    315deg,
    #ff0500 0px,
    #ff0500 1px,
    white 2px,
    white 20px /* determines size */
  );
  height: 100vh;
  width: 60vw;
  border-radius: 12px;

  ::-webkit-scrollbar {
    width: 0px;
  }
`
