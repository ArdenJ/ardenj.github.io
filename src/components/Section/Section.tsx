import React, { ReactElement } from 'react'

import { StyledSection } from './Sections.styled'

export default function Section(props: any) {
  return <StyledSection>{props.children}</StyledSection>
}
