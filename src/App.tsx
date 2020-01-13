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
              hello, I&apos;m Arden<span style={{ color: '#ff0500' }}>*</span>
            </h1>
            <h2>I use Js/Ts and GraphQL to make things</h2>
            <p></p>
            <Links links={links} />
          </Header>
          <Section>
            <Example />
          </Section>
        </Main>
        <div className="footer" style={{ height: '26vh' }}>
          <Footer>
            <>
              * I originally trained as a classical composer (think Beethoven,
              only with better hearing and fewer good ideas) but fell in love
              with writing code during the second year of my master’s degree.
              Since then I have spent some time learning different technologies
              and feel confident to begin a new career as a software developer.
            </>
          </Footer>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
