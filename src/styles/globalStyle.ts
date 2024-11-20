import normalize from 'styled-normalize'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    line-height: normal;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }

  html {
    font-size: 16px;
  }

  button {
    cursor: pointer;
    border: none;
    appearance: none;
    outline: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    display: block;
  }

  #root {
    width: 100%;
    max-width: 480px;
    height: 100vh;
    overflow-x: hidden;
    margin: 0 auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  input {
    appearance: none;
    outline: none;
    border: none;
    width: 100%;
    padding: 1em;
    font-size: ${({ theme }) => theme.fontSize.large};
    background-color: ${({ theme }) => theme.fontColor.cwhite};
    border-radius: 0.25em;
    margin-top: 0.5em;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  input::placeholder {
    color: ${({ theme }) => `${theme.fontColor.black}50`};
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.fontColor.navy};
  }

  textarea {
    appearance: none;
    outline: none;
    resize: none;
    width: 100%;
    padding: 1em;
    font-size: ${({ theme }) => theme.fontSize.large};
    background-color: ${({ theme }) => theme.fontColor.cwhite};
    border-radius: 0.25em;
    margin-top: 0.5em;
    min-height: 9.4em;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  label {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
    color: ${({ theme }) => theme.fontColor.black};
  }

  img {
    display: block;
  }
`

export const GlobalContainer = styled.div`
  min-height: 100vh;
  position: relative;
`

export default GlobalStyle
