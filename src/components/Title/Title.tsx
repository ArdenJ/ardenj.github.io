import React from 'react'
import styled from 'styled-components'

export default function Title(
  props: JSX.ElementChildrenAttribute,
): JSX.Element {
  return <StyledTitle>{props.children}</StyledTitle>
}

const StyledTitle = styled.main`
  padding: 2rem;

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

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and ${({ theme }) => theme.screenWidth.medium} {
    display: flex;
    align-items: center;
    font-size: 8rem;
  }
  @media screen and ${({ theme }) => theme.screenWidth.large} {
    font-size: 8rem;
  }
`