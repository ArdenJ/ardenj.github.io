import React from 'react'

import { devSite, audioPlayer, calendar } from './demoExamples'

import { StyledDemo } from './Drawer.styled'

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
          <StyledDemo data-testid="demo">
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
          </StyledDemo>
        )
      } else {
        //   TODO: this not dry.
        return (
          <StyledDemo>
            <h1 className="demoTitle">{title}</h1>
            <li key={`Repo${title}_${index}`}>
              <a href={`${repoLink}`} rel="noopener noreferrer" target="_blank">
                repo
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
