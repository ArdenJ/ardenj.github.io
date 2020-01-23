import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Links from '../Links'
import { userLinks } from '../../../data/siteconfig'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styling/theme'
import { GlobalStyles } from '../../../styling/global'

afterEach(cleanup)
// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Links links={userLinks} />
    </ThemeProvider>,
    container,
  )
})

it('renders Links correctly', () => {
  const { getAllByTestId } = render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Links links={userLinks} />
    </ThemeProvider>,
  )
  expect(getAllByTestId('button')).toHaveLength(3)
})
