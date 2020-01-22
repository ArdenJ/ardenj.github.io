import React from 'react'

import { devSite, audioPlayer } from './demoExamples'

import { StyledDemo } from './Drawer.styled'

const Demos: React.FC = () => {
  const arr = [devSite, audioPlayer]

  // eslint-disable-next-line no-undef
  const demoArr: JSX.Element[] = arr.map((i, index: number) => {
    const {
      _demoInfo: { title, repoLink, demoLink },
    } = i

    const DemoItem = () => {
      if (demoLink !== undefined || demoLink !== '') {
        return (
          <StyledDemo>
            <h1 className="demoTitle">{title}</h1>
            <li key={`${title}_1`}>
              <a href={`${demoLink}`} rel="noopener noreferrer" target="_blank">
                demo
              </a>
            </li>
            <li key={`${title}_1`}>
              <a href={`${repoLink}`} rel="noopener noreferrer" target="_blank">
                repo
              </a>
            </li>
          </StyledDemo>
        )
      } else {
        //   TODO: this not dry.
        return (
          <StyledDemo>
            <h1 className="demoTitle">{title}</h1>
            <li key={`${title}_1`}>
              <a href={`${demoLink}`} rel="noopener noreferrer" target="_blank">
                demo
              </a>
            </li>
          </StyledDemo>
        )
      }
    }
    return <DemoItem key={`project_${index}`} />
  })

  return <>{demoArr}</>
}

export default Demos
