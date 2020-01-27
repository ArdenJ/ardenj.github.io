import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Demos from '../Demos'

afterEach(cleanup)
it('returns two the examples list', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Demos />, container)
  expect(container.children.length).toBe(3)
})
