import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../../styling/theme'
import { GlobalStyles } from '../../../styling/global'

import Demos from '../Demos'

afterEach(cleanup)
// eslint-disable-next-line jest/expect-expect
it('returns two the examples list', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Demos />, container)
  expect(container.children.length).toBe(2)
})
