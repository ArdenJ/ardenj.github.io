import React from 'react'

import { StyledLink } from './Links.styled'

export default function Links({ links }: any): JSX.Element {
  const arr = links.map((item: string, index: number) => {
    return <StyledLink key={`link_${index}`}>{item}</StyledLink>
  })

  return <div>{arr}</div>
}
