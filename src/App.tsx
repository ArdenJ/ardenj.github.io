import React, { useState, useRef } from 'react'
import FocusLock from 'react-focus-lock'
import { ThemeProvider } from 'styled-components'

import { theme } from './styling/theme'
import { GlobalStyles } from './styling/global'

import {
  Container,
  Main,
  Header,
  Footer,
  Links,
  Drawer,
} from './components/index'

import { useClickOut } from './useClickOut'

import { userLinks } from './data/siteconfig'

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const node = useRef()
  const menuId = 'thisIsMenu'

  useClickOut(node, () => setOpen(false))
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
        <FocusLock disabled={!open}>
          <Drawer open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
        <Container>
          <Main>
            <Header>
              <h1>
                I&apos;m Arden<span style={{ color: '#101010' }}>*</span>
              </h1>
              <p>I like using javascript and graphql to make things</p>
              <Links links={userLinks} />
              <div style={{ width: '100%' }}>
                <button className="demoButton" onClick={() => setOpen(!open)}>
                  demos
                </button>
              </div>
            </Header>
          </Main>
          <div className="footer" style={{ minHeight: '26vh' }}>
            <Footer>
              <>
                <p>
                  * (she/her) I have been working with JavaScript for a little
                  over a year. I am highly motivated (my learning has been
                  almost entirely self-directed) and at this point, I feel
                  confident in my ability to write clean and maintainable code.
                  Nevertheless, I am aware that I still have a lot to learn and
                  hope to be able to do that within a supportive professional
                  environment.
                </p>
                <p>
                  Aside from Js, I have experience using TypeScript, HTML5,
                  CSS3, CSS in Js, GraphQL and Apollo, Node, Express, Git, Jest,
                  and Testing-Library.
                </p>
              </>
            </Footer>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
