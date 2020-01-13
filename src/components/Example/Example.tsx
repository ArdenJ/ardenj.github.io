import React from 'react'

import { StyledExample } from './Example.styled'

import { DevSite, WebPlayer, WebPlayurrr } from './examples'

interface Props {}

const Example: React.FC<Props> = () => {
  const ExampleArr = [DevSite, WebPlayer, WebPlayurrr]

  const childArr = ExampleArr.map(example => {
    const {
      _exampleData: {
        title,
        repoLink,
        demoLink,
        image,
        description,
        challenges,
      },
    } = example

    const challengeList: JSX.Element[] = challenges.map(
      (i: string, index: number) => <li key={`challenge_${index}`}>{i}</li>,
    )

    // This isn't very DRY - TODO: return compoonent that styles  itself automatically
    const Details = () => {
      if (image === '') {
        return (
          <div className="details">
            <div className="textContainer">
              <p>{description}</p>
              <h4>Challenges</h4>
              <ul>{challengeList}</ul>
            </div>
          </div>
        )
      } else {
        return (
          <div className="details">
            <div className="imageContainer">
              <img src={`${image}`} alt="alt text" />
            </div>
            <div className="textContainer">
              <p>{description}</p>
              <h4>Challenges</h4>
              <ul>
                <li>Bunch of list items</li>
              </ul>
            </div>
          </div>
        )
      }
    }

    return (
      <>
        <StyledExample>
          <div className="container">
            <div className="title">
              <h2>{title}</h2>
              <h3>
                <a>{demoLink === '' ? repoLink : demoLink}</a>
              </h3>
            </div>
            <Details />
            <div className="techContainer">Tech logooooos</div>
          </div>
        </StyledExample>
      </>
    )
  })

  return <>{childArr}</>
}

export default Example
