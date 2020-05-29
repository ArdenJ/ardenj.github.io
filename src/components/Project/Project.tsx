import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { color } from './randomColors'

interface IProjectProps {
  title: string
  summary: string
  demo: string
  repo: string
}

const Project = ({ title, summary, demo, repo }: IProjectProps):JSX.Element => {
  return (
    <StyledProject>
      <div className='PROJECT'>
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
      </div>
    </StyledProject>
  )
}

export default Project

const StyledProject = styled.article`
  padding: 2rem 0;

  .PROJECT {
    height: 100%;
    width: 100%;
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
      max-height: 40%;
      display: flex;
      align-items: center;
      width: 40%;
      padding-left: 1rem;
    }

    .links:first-child {
      margin-bottom: 1rem;
    }

  }
`

const Button = (props: any): JSX.Element => {
  const ref = useRef(null)

  useEffect(() => {
    // @ts-ignore
    // eslint-disable-next-line no-return-assign
    ref.current.addEventListener('mouseenter', (e) => e.target.style.background = color())
    return () => {
      // @ts-ignore
      ref.current.addEventListener('mouseenter')
    }
  }, [ref])

  return (
    <StyledButton>
      <a href={props.link} rel='noopener noreferrer' target='_blank'>
        <div ref={ref} className='ref-div'>
          {props.title}
        </div>
      </a>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 0.4rem;

  a {text-decoration: none}

  .ref-div {
    background: ${() => color()};
    border: none;
    padding: 0.8rem;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: capitalize;
    color: white;
    transition-delay: 0.2s;
    transition-duration: 0.5s;
    cursor: pointer;
  }

  .ref-div:hover {
    transition-duration: 0.3s;
  }

  @media screen and ${({ theme }) => theme.screenWidth.large} {
    .ref-div {
      width: 100%;
    }
  }
`
