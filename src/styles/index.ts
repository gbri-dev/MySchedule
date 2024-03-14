import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
`

export default GlobalStyle
