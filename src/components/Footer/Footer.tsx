import React from 'react'

import { StyledFooter } from './Footer.styled'

export default function Footer(props: any) {
  return (
    <StyledFooter>
      <div className="wrapper">
        <article className="about">{props.children}</article>
        <footer className="copyright">
          This will take input from the site config
        </footer>
      </div>
    </StyledFooter>
  )
}
