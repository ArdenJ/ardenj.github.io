import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from './styling/theme'
import { GlobalStyles } from './styling/global'

import { Title, Body, Container } from './components/index'

import { projArr } from './components/Project/projects'

const App: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false)

  function copy() {
    const el = document.createElement('textarea')
    el.value = 'j.gaddas@outlook.com'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  const timer = setTimeout(() => setIsHidden(false), 3000)

  function handleAlert() {
    if (isHidden === true) clearTimeout(timer)
    if (isHidden === false) clearTimeout(timer)
    copy()
    setIsHidden(true)
    return timer
  }

  const Alert = () => {
    return (
      <div id='alert' style={{
        position: 'fixed',
        top: '0',
        opacity: 1,
        width: '100vw',
        display: 'flex',
        justifyContent: 'spaceAround',
      }}>
        <StyledAlert className={isHidden ? '' : 'hidden' }>
          <span>copied to clipboard!</span>
          <button onClick={() => setIsHidden(!isHidden)}>
            <span>&times;</span>
          </button>
        </StyledAlert>
      </div>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <div className='content2'>
          {/* Title */}
          <Title>
            <h1>hi I&apos;m<br/>arden</h1>
          </Title>
          {/* Content */}
          <Body>
            <div>
              and I&apos;m a software developer based in London. I&apos;ve been coding for over a year and mainly work with <strong>JavaScript/TypeScript</strong>, <strong>Node</strong>, and <strong>GraphQL</strong>. Perhaps more importantly, I&apos;m an enthusiastic team member, who is highly-motivated by technical and creative challenges. <span role="img" aria-label="nerd-face">🤓</span><br/>
              <strong>I am also actively looking for my first role - so, if you think I might be a good fit for your team, please do get in touch!</strong><br/>
              <ul>
                <li><a href='https://www.github.com/ArdenJ' target='blank' rel='noopener noreferrer'>github</a></li>
                <li><a href='https://www.linkedin.com/in/arden-james/' target='blank' rel='noopener noreferrer'>linkedin</a></li>
                <li><button onClick={() => handleAlert()}>email</button></li>
              </ul>
            </div>
          </Body>
        </div>
        <Projects>
          {projArr}
        </Projects>
      </Container>
      <Alert />
    </ThemeProvider>
  )
}

const StyledAlert = styled.div`
  min-width: 300px;
  margin: 0 auto;
  color: #000;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.accent1};

  span {
    padding: 1rem;
  }

  button {
    background: none;
    border: none;
    color: #000;
    font-size: 2.5rem;
  }
`

const Projects = styled.section`
  padding: 0 2rem;

  @media screen and ${({ theme }) => theme.screenWidth.large} {

    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    top: 0;
  }
`

export default App
