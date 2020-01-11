import styled from 'styled-components'

export const StyledExample = styled.article`
  height: 100%;
  width: 100%;
  background: repeating-linear-gradient(
    -45deg,
    #121212 0%,
    #121212 3.5%,
    #222222 3.5%,
    #222222 7%
  );
  display: grid;
  grid-template-areas:
    'title'
    'details'
    'technologies';
  grid-template-rows: auto 2fr 1fr;
  padding: 1rem;

  .title {
    grid-area: title;
    padding: 2rem 0 1rem 0;

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

  .details {
    grid-area: details;

    display: grid;
    grid-template-areas: 'imageContainer textContainer';
    grid-template-columns: 40% 60%;

    > .imageContainer {
      grid-area: imageContainer;
      background-color: yellow;
    }

    > .textContainer {
      grid-area: textContainer;
      padding: 0 1rem;
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
    height: 3rem;
    margin: 1.2rem 0 0;
    vertical-align: middle;
    background-color: blue;
  }
`
