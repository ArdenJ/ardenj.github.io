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
        {/* TODO: Focus lock  */}
        <FocusLock disabled={!open}>
          <Drawer open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
        <Container>
          <Main>
            <Header>
              <h1>I&apos;m Arden*</h1>
              <p>I like using javascript and graphql to make things</p>
              <Links links={userLinks} />
              <div style={{ width: '100%' }}>
                <button className="demoButton" onClick={() => setOpen(!open)}>
                  <span>demos</span>
                </button>
              </div>
            </Header>
          </Main>
          <div className="footer" style={{ minHeight: '26vh' }}>
            <Footer>
              <>
                <p>
                  * At present, I have a little over a year’s experience working
                  mainly on my own projects, a couple of which you can find
                  links to above or via my Github (starred repos). While I am
                  very aware of my lack of experience, I nevertheless feel
                  confident that I can contribute meaningfully as part of a
                  larger team and believe looking for my first role as a
                  developer to be the next step in continuing my development.
                </p>
                <p>
                  I enjoy working with new technologies and have experience
                  using: JavaScript (ES6+) and more recently TypeScript, React
                  (16+), CSS, CSS in JS, HTML, GraphQL, and Node.
                </p>
                <p>
                  I am also confident using Git, linting and formatting my code,
                  and writing tests using Jest and Testing-Library.
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
