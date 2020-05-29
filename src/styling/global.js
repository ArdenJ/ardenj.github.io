import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    
    html, body {
        font-family: 'Muli', sans-serif;
    }
    
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
        align-items: center;
        color: ${({ theme }) => theme.dark};
        height: 100vh;
        width: 100vw;
        text-rendering: optimizeLegibility;
        line-height: 1.5;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        line-height: 1;
    }

    .hidden {
        display: none !important;
        transform: translateY(-100%);
        opacity: 0;
        transition-duration: 1s;
    }
`
