import React from 'react'
import { StyledHeader } from './Header.styled'

export default function Header(
  props: JSX.ElementChildrenAttribute,
): JSX.Element {
  return (
    <StyledHeader data-testid="title">
      <>{props.children}</>
    </StyledHeader>
  )
}
