import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@import url('href="https://fonts.googleapis.com/css?family=Lato:300,300i,700|Montserrat:500,700&display=swap"');
    
    * {
        padding: 0;
        margin: 0;
    }
    
    html, body {
        font-family: 'Lato', sans-serif;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
        align-items: center;
        background: ${({ theme }) => theme.bodyLight};
        color: ${({ theme }) => theme.textDark};
        display: flex;
        height: 100vh;
        justify-content: center;
        text-rendering: optimizeLegibility;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }
`
