import styled from 'styled-components'

export const StyledExample = styled.article`
  position: relative;
  height: 100%;
  width: 100%;
  display: inline-block;
  flex-shrink: 0;
  .container {
    display: grid;
    height: 100%;
    grid-template-areas:
      'title whitespace'
      'details whitespace'
      'technologies whitespace';
    grid-template-columns: 100% auto;
    grid-template-rows: 5rem auto 3rem;
    padding: 1rem;

    h2,
    h3,
    h4,
    li,
    p {
      background-color: white;
    }
  }

  .title {
    grid-area: title;
    padding: 2rem 0 1rem 0;
    width: 50%;

    > h2 {
      font-size: 1.6rem;
    }

    > h3 {
      font-family: 'Lato', sans-serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  /* This will require two different styles for rendering - the flex for when there is no image present and relative/abs positioned parent and child for when aan image is available. */
  .details {
    grid-area: details;

    display: flex;
    /* grid-template-areas: 'imageContainer textContainer'; */

    > .imageContainer {
      grid-area: imageContainer;
    }

    > .textContainer {
      grid-area: textContainer;
      max-width: 100%;

      p,
      h4,
      li {
        padding: 0.5rem 0;
      }

      ul {
        list-style: none;
      }
    }
  }

  .techContainer {
    grid-area: technologies;
    height: 100%;
    padding: 1.2rem 0 0;
    vertical-align: middle;
    background-color: blue;
  }
`
