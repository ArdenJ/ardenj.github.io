import React from 'react'
import { StyledTitle } from './Title.styled'

export default function Title(
  props: JSX.ElementChildrenAttribute,
): JSX.Element {
  return <StyledTitle><h1>{props.children}</h1></StyledTitle>
}
