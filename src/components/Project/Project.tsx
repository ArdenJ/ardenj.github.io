import React from 'react'
import styled from 'styled-components'

interface IProjectProps {
  title: string
  summary: string
  demo: string
  repo: string
}

const Project = ({ title, summary, demo, repo }: IProjectProps):JSX.Element => {
  return (
    <StyledProject>
      <div className='content'>
        <div className='titleContainer'>
          <h2>{title}</h2>
          <a href={demo} rel='noopener noreferrer' target='_blank'>demo</a>
          &nbsp;
          <a href={repo} rel='noopener noreferrer' target='_blank'>repo</a>
        </div>
        <div className='summary'>
          {summary}
        </div>
      </div>
    </StyledProject>
  )
}

export default Project

const StyledProject = styled.article`
  height: 100%;
  max-width: 100%;

  border: 3px solid black;
  border-radius: 10px;

  padding: 1rem;
  margin: 1rem 0;

  @media screen and ${({ theme }) => theme.screenWidth.large} {
    flex-direction: column;
    .summary {
      max-width: 80%;
      padding-left: 1rem;
    }
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
    }
  }

  a {
    color: black;
  }


  .titleContainer {
    min-width: 35%;
  }

  .summary {
    width: 100%;
  }


`
