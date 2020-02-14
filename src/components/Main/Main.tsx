import React from 'react'

import { StyledMain } from './Main.styled'

export default function Main(props: JSX.ElementChildrenAttribute): JSX.Element {
  return (
    <StyledMain>
      <>{props.children}</>
    </StyledMain>
  )
}
