import React from 'react'
import { StyledTitle } from './Title.styled'

export default function Title(
  props: JSX.ElementChildrenAttribute,
): JSX.Element {
  return <StyledTitle>{props.children}</StyledTitle>
}
