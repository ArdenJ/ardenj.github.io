import React from 'react'
import styled from 'styled-components'

export default function Body(
  props: JSX.ElementChildrenAttribute,
): JSX.Element {
  return <StyledBody>{props.children}</StyledBody>
}

const StyledBody = styled.main`
  padding: 2rem;
  max-width: 80%;

  ul {
    list-style: none;
    display: inline-flex;
    flex-direction: row;

    > li {
      padding: 1rem 1rem 0 0;
    }

    button {
      background: none;
      border: none;
      text-decoration: underline;
      cursor: pointer;
    }

    button, a {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 1rem;
      transition-duration: 0.5s;
    }

    button:hover, a:hover {
    transition-duration: 0.6s;
    transition-delay: 0.4s;
    text-decoration: underline;
    }
  }

  @media screen and ${({ theme }) => theme.screenWidth.large} {
    display: flex;
    align-items: center;
    max-width: 80%;
    align-self: right;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1000px){
    /* padding-top: 15vh; */
  }

`
