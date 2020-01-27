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
        tabIndex={props.open ? 0 : -1}
      >
        <span>&times;</span>
      </button>
      <div className="demos">
        <Demos />
      </div>
    </StyledDrawer>
  )
}
