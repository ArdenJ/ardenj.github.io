import React from 'react'

import { copyright } from '../../data/siteconfig'

import { StyledFooter } from './Footer.styled'

export default function Footer(
  props: JSX.ElementChildrenAttribute,
): JSX.Element {
  return (
    <StyledFooter>
      <div className="wrapper">
        <article className="about">{props.children}</article>
        <footer className="copyright">{copyright}</footer>
      </div>
    </StyledFooter>
  )
}
