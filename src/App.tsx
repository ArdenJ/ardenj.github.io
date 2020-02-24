import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from './styling/theme'
import { GlobalStyles } from './styling/global'

import { Container, Main, Header, Demos } from './components/index'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          padding: 0,
          margin: 0,
        }}
        data-testid="app"
      >
        <Container>
          <Main>
            <Header>
              <h1>I&apos;m Arden</h1>
              <p>I like using javascript and graphql to make things</p>
              <p>
                <a
                  href="https://www.twitter.com/_ardenj"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  twitter
                </a>
                &nbsp;
                <a
                  href="https://www.github.com/ArdenJ"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github
                </a>
              </p>
            </Header>
          </Main>
          <Demos />
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
