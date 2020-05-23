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
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 0.8;
    text-transform: lowercase;

  @media screen and ${({ theme }) => theme.screenWidth.medium} {
    display: flex;
    align-items: center;
    font-size: 8rem;
  }
  @media screen and ${({ theme }) => theme.screenWidth.large} {
    font-size: 8rem;
  }
`
