import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// eslint-disable-next-line jest/expect-expect
test('it renders without crashing', () => {
  const container = document.createElement('div')
  ReactDOM.render(<App />, container)
  ReactDOM.unmountComponentAtNode(container)
})
