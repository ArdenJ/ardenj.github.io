import React from 'react'

import { StyledExample } from './Example.styled'

interface Props {}

const Example: React.FC<Props> = () => {
  return (
    <StyledExample>
      <div className="title">
        <h2>This is the first example</h2>
        <h3>
          <a>this is a github link</a>
        </h3>
      </div>
      <div className="details">
        <div className="imageContainer">an image goes here</div>
        <div className="textContainer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            atque voluptatibus sit qui expedita corrupti placeat tenetur ratione
            nobis sunt, perferendis quos perspiciatis quasi maiores amet
            obcaecati. Harum, inventore tempora?
          </p>
          <h4>Challenges</h4>
          <ul>
            <li>Bunch of list items</li>
          </ul>
        </div>
      </div>
      <div className="techContainer">Tech logooooos</div>
    </StyledExample>
  )
}

export default Example
