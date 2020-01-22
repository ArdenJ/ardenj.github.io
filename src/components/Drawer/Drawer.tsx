import React from 'react'

import Demos from './Demos'

import { StyledDrawer } from './Drawer.styled'

export default function Drawer(props: {
  open: boolean
  setOpen: CallableFunction
  id: string
}): JSX.Element {
  return (
    <StyledDrawer {...props}>
      <button
        className="drawerButton"
        onClick={() => props.setOpen(!props.open)}
      >
        <span>&times;</span>
      </button>
      <div className="demos">
        <Demos />
      </div>
    </StyledDrawer>
  )
}
