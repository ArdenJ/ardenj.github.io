import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import { theme } from './styling/theme'
import { GlobalStyles } from './styling/global'

import { Title, Body, Container } from './components/index'

import { projArr } from './components/Project/projects'

const App: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false)

  // TODO: This component should not be responsible for the alert!
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

  const parent = {
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 1,
      },
    },
  }

  const childParagraph = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
      x: -20,
    },
  }

  const childList = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const childListItem = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
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
            <motion.div initial="hidden" animate="visible" variants={parent}>
              <motion.p variants={childParagraph}>
                and I&apos;m a software developer based in London mainly working with <strong>JavaScript/TypeScript</strong>, <strong>Node</strong>, and <strong>GraphQL</strong> (and maybe a little <strong>Go</strong>). I make terrible puns, derive an almost-weird amount of pleasure from good docs with meaningful examples, and I am probably guilty of getting too enthusiastic about the new framework evry1 is talking about this week.<br/>
                <strong>I am also actively looking for a new role - so, if you think I might be a good fit for your team, please do get in touch!</strong><br/>
              </motion.p>
              <motion.ul initial="hidden" animate="visible" variants={childList}>
                <motion.li variants={childListItem}><a href='https://www.github.com/ArdenJ' target='blank' rel='noopener noreferrer'>github</a></motion.li>
                <motion.li variants={childListItem}><a href='https://www.linkedin.com/in/arden-james/' target='blank' rel='noopener noreferrer'>linkedin</a></motion.li>
                <motion.li variants={childListItem}><button onClick={() => handleAlert()}>email</button></motion.li>
              </motion.ul>
            </motion.div>
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
