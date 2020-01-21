import React from 'react'

import { StyledLinkContainer, StyledLink } from './Links.styled'

export default function Links({ links }: any): JSX.Element {
  const arr = links.map((item: string, index: number) => {
    return <StyledLink key={`link_${index}`}>{item}</StyledLink>
  })

  return <StyledLinkContainer>{arr}</StyledLinkContainer>
}
