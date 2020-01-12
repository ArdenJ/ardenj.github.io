import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from './globalStyles/theme'
import { GlobalStyles } from './globalStyles/global'

import Container from './components/Container/Container'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Links from './components/Links/Links'
import Section from './components/Section/Section'
import Example from './components/Example/Example'

const links = ['twitter', 'github', 'email']

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Main>
          <Header>
            <h1>
              helloo, I&apos;m Arden<span style={{ color: '#ff0500' }}>*</span>
            </h1>
            <h2>
              I use Js/Ts (Node; React) and GraphQL (Apollo) to make things 🚀
            </h2>
            <p></p>
            <Links links={links} />
          </Header>
          <Section>
            <Example />
          </Section>
        </Main>
        <div className="footer" style={{ height: '26vh' }}>
          <Footer>This is the footer</Footer>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
