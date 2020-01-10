import React from 'react'
import { StyledContainer } from './Container.styled'

export default function Container(
  props: JSX.ElementChildrenAttribute,
): JSX.Element {
  return <StyledContainer>{props.children}</StyledContainer>
}
