import normalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    line-height: 1.5;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
    color: #2B2E33;
  }

  button {
    cursor: pointer;
    background-color: #002561;
    color: #fff;
    border: none;
  }

  li {
    list-style: none;
  }
`

export default GlobalStyle
