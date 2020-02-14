import React from 'react'

import { devSite, audioPlayer, calendar } from './demoExamples'

import Demo from './Demo'

import { StyledDemoContainer } from './Demos.styled'

const Demos: React.FC = props => {
  const arr = [devSite, audioPlayer, calendar]

  // eslint-disable-next-line no-undef
  const demoArr: JSX.Element[] = arr.map((i, index: number) => {
    const {
      _demoInfo: { title, repoLink, demoLink },
    } = i

    const DemoItem = () => {
      if (demoLink !== undefined) {
        return (
          <Demo data-testid="demo">
            <h1 className="demoTitle">{title}</h1>
            <li key={`Demo${title}_${index}`}>
              <a href={`${demoLink}`} rel="noopener noreferrer" target="_blank">
                demo
              </a>
            </li>
            <li key={`Repo${title}_${index}`}>
              <a href={`${repoLink}`} rel="noopener noreferrer" target="_blank">
                repo
              </a>
            </li>
          </Demo>
        )
      } else {
        //   TODO: this not dry.
        return (
          <Demo>
            <h1 className="demoTitle">{title}</h1>
            <li key={`Repo${title}_${index}`}>
              <a href={`${repoLink}`} rel="noopener noreferrer" target="_blank">
                repo
              </a>
            </li>
          </Demo>
        )
      }
    }
    return <DemoItem key={`project_${index}`} />
  })

  return (
    <StyledDemoContainer>
      <h2>Recent Projects:</h2>
      <div className="demos">{demoArr}</div>
    </StyledDemoContainer>
  )
}

export default Demos
