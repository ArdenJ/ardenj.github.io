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
                * I originally trained as a classical composer (think Beethoven,
                only with better hearing and fewer good ideas) but fell in love
                with writing code during the second year of my master’s degree.
                Since then I have spent some time learning different
                technologies and feel confident to begin a new career as a
                software developer. I am aware of my relative inexperience, but
                consider my agnosticism a strong foundation on which to build
                good development practices.
              </>
            </Footer>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
