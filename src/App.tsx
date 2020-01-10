import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from './globalStyles/theme'
import { GlobalStyles } from './globalStyles/global'

import Header from './components/Header/Header'
import Links from './components/Links/Links'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header>
          <h1>Hello I&apos;m Arden</h1>
          <h2>and I write hacky code</h2>
          <Links />
        </Header>
      </div>
    </ThemeProvider>
  )
}

export default App
