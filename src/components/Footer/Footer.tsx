import React from 'react'

import { StyledFooter } from './Footer.styled'

export default function Footer(props: any) {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="about">{props.children}</div>
        <div className="copyright">
          THis will take input from the site config
        </div>
      </div>
    </StyledFooter>
  )
}
