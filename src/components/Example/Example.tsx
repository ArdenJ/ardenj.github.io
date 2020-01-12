import React from 'react'

import { StyledExample } from './Example.styled'

import { DevSite, WebPlayer } from './examples'

interface Props {}

const Example: React.FC<Props> = () => {
  const ExampleArr = [DevSite, WebPlayer]

  const childArr = ExampleArr.map(example => {
    const {
      _exampleData: { title, repoLink, demoLink, description, challenges },
    } = example
    return (
      <>
        <StyledExample>
          <div className="title">
            <h2>{title}</h2>
            <h3>
              <a>{demoLink}</a>
            </h3>
          </div>
          <div className="details">
            <div className="imageContainer">an image goes here</div>
            <div className="textContainer">
              <p>{description}</p>
              <h4>Challenges</h4>
              <ul>
                <li>Bunch of list items</li>
              </ul>
            </div>
          </div>
          <div className="techContainer">Tech logooooos</div>
        </StyledExample>
      </>
    )
  })

  return <>{childArr}</>
}

export default Example
