import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    #root{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    
    li{
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        margin: 0 0;
        padding: 0 0;
    }
`

export default GlobalStyle
