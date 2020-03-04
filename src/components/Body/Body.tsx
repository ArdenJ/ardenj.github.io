import React from 'react'
import { StyledBody } from './Body.styled'

export default function Body(
  props: JSX.ElementChildrenAttribute,
): JSX.Element {
  return <StyledBody>{props.children}</StyledBody>
}
