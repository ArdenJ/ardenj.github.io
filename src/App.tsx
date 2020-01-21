import React, { useState, useRef } from 'react'
import FocusLock from 'react-focus-lock'
import { ThemeProvider } from 'styled-components'

import { theme } from './styling/theme'
import { GlobalStyles } from './styling/global'

import Container from './components/Container/Container'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Links from './components/Links/Links'
import Drawer from './components/Drawer/Drawer'

import { useClickOut } from './useClickOut'

const links = ['twitter', 'github', 'email']

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const node = useRef()
  const menuId = 'thisIsMenu'

  useClickOut(node, () => setOpen(false))
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ width: '100vw', height: '100vh', display: 'grid' }}>
        <FocusLock disabled={!open}>
          <Drawer open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
        <Container>
          <Main>
            <Header>
              <h1>
                I&apos;m Arden<span style={{ color: '#ff0500' }}>*</span>
              </h1>
              <p>I like to use javascript and graphql to make things</p>
              <Links links={links} />
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
