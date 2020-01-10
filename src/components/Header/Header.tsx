import React from 'react'
import { StyledHeader } from './Header.styled'

export default function Header(props: any): JSX.Element {
  return (
    <StyledHeader>
      <h1>{props.children}</h1>
    </StyledHeader>
  )
}
