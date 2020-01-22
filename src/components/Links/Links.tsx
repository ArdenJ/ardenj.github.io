import React from 'react'

import { StyledLinkContainer, StyledLink } from './Links.styled'

interface ILink {
  url: string
  label: string
}

// TODO: Remove any
export default function Links({ links }: any): JSX.Element {
  const arr = links.map((item: ILink, index: number) => {
    return (
      <StyledLink key={`link_${index}`}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      </StyledLink>
    )
  })

  return <StyledLinkContainer>{arr}</StyledLinkContainer>
}
