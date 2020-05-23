import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface IProjectProps {
  title: string
  summary: string
  demo: string
  repo: string
}

const Project = ({ title, summary, demo, repo }: IProjectProps):JSX.Element => {
  const item = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { when: 'afterChildren', delay: 2, duration: 3 },
    },
  }

  return (
    <StyledProject>
      <motion.div
        className='PROJECT'
        initial="hidden"
        animate="visible"
        variants={item}>
        <div className='content'>
          <div className='titleContainer'>
            <h2>{title}</h2>
            <div className='summary'>
              {summary}
            </div>
          </div>
          <div className='links'>
            <Button title='demo' link={demo} />
            <Button title='repo' link={repo} />
          </div>
        </div>
      </motion.div>
    </StyledProject>
  )
}

export default Project

const StyledProject = styled.article`
  padding: 2rem 0;

  .PROJECT {
    height: 100%;
    width: 100%;


    background-image: repeating-linear-gradient(
      -45deg,
      #fbe87e,
      #fbe87e 2px,
      #fff 2px,
      #fff 10px
    );
  }

  .content {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .titleContainer {
    width: 90%;
  }

  .summary {
    padding: 0.8rem 0;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    min-height: 5.4rem;
  }

  @media screen and ${({ theme }) => theme.screenWidth.large} {
    .PROJECT { flex-direction: column; }

    .titleContainer {
      width: 100%;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
    }

    .titleContainer {
      padding-right: 2rem;
    }

    .links {
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      max-width: 40%;
      padding-left: 1rem;
    }

    .links:first-child {
      margin-bottom: 1rem;
    }

  }
`

const Button = (props: any): JSX.Element => {
  return (
    <StyledButton>
      <a href={props.link} rel='noopener noreferrer' target='_blank'>
        <button>
          {props.title}
        </button>
      </a>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  width: 100%;

  button {
    background: black;
    border: none;
    padding: 0.8rem;
    min-width: 50%;

    font-size: 0.8rem;
    font-weight: 700;
    text-transform: capitalize;
    color: white;

    transition-delay: 0.2s;
    transition-duration: 0.5s;

    cursor: pointer;
  }

  button:hover {
    transition-duration: 0.3s;
    background: ${({ theme }) => theme.accent1};
  }

  @media screen and ${({ theme }) => theme.screenWidth.large} {
    button: {
      width: 100%;
    }
  }
`
