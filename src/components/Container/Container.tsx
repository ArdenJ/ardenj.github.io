import React from 'react'
import styled from 'styled-components'

export default function Container(
  props: JSX.ElementChildrenAttribute,
): JSX.Element {
  return <StyledContainer>{props.children}</StyledContainer>
}

const StyledContainer = styled.main`
  background-color: ${({ theme }) => theme.bodyPrimary};
  margin: auto;
  display: grid;

  @media screen and (min-width: 1000px){
    grid-template-columns: auto auto;
    width: 80vw;
  }

  @media screen and (min-width: 2000px) {
    width: 60vw;
    max-height: 40vh !important; 
  }
`
