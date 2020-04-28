import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from './styling/theme'
import { GlobalStyles } from './styling/global'

import { Title, Body, Container } from './components/index'

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
      <div id='alert' style={{ position: 'fixed', top: '0', opacity: 1, width: '100vw', display: 'flex', justifyContent: 'spaceAround' }}>
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
        {/* Title */}
        <Title>
          <h1>hi I&apos;m<br/>arden</h1>
        </Title>
        {/* Content */}
        <Body>
            and I&apos;m a software developer based in London. I&apos;ve been coding for over a year and mainly work with <strong>JavaScript</strong>, <strong>Node</strong>, <strong>GraphQL</strong>, and recently a little <strong>Rust</strong> (as a treat <span role="img" aria-label="crab">🦀</span>). Perhaps more importantly, I&apos;m an enthusiastic team member and highly-motivated by delivering eloquent solutions to technical challenges. <span role="img" aria-label="nerd-face">🤓</span><br/>
          <strong>I am also actively looking for a new and exciting role - so, if you think I might be a good fit for your team, please do have a look at my pinned GitHub repos and/or get in touch.</strong><br/>
          <ul>
            <li><a href='https://www.github.com/ArdenJ' target='blank' rel='noopener noreferrer'>github</a></li>
            <li><a href='https://twitter.com/_ardenj' target='blank' rel='noopener noreferrer'>twitter</a></li>
            <li><button onClick={() => handleAlert()}>email</button></li>
          </ul>
        </Body>
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
    /* font-weight: 900; */
    font-size: 2.5rem;
  }
`

export default App
