import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

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

export const Buttons = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const ButtonSaved = styled(Buttons)`
  background-color: ${variaveis.verde};
`
export const ButtonCancel = styled(Buttons)`
  background-color: ${variaveis.vermelho};
`
export default GlobalStyle
