import InputMask from "react-input-mask";

import { createGlobalStyle, styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from './variaveis'

export type TituloType = {
  apply: boolean
}

export type BotaoLinkType = {
  pageActive: boolean
}

export type EdButtonCancelType = {
  conjunto: 'editar' | 'cancelar'
}

export type DelButtonType = {
  conjunto: string
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
    
  }
  body {
    background: #d1d1d0;
 
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;
  

  @media (max-width: 1024px) {
    max-width: 72%;
  }

  @media (max-width: 640px) {
    max-width: 70%;
  }
`

export const Titulo = styled.h2<TituloType>`
font-weight: bold;
font-size: 30px;
display: block;
margin-top: 0;
color: ${(props) => !props.apply? Colors.redColor : Colors.blackB};
margin-bottom: 40px;
font-family: sans-serif;
`

export const TituloFormulario = styled.h2`
display: block;
margin-top: 0;
margin-bottom: 40px;
font-size: 30px;
font-weight: bold;
font-family: sans-serif;
  color: ${Colors.redColor};
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  cursor: pointer;
  background-color: ${Colors.blueNormal};
  border-radius: 8px;
`

export const BotaoLink = styled(Link)<BotaoLinkType>`
  font-weight: bold;
  line-height: 26px;
  padding: 8px 12px;
  font-size: 17.5px;
  border: none;
  cursor: ${(prop) => prop.pageActive? 'default' : 'pointer'};
  background-color: ${Colors.blackB};
  border-radius: 8px;
  margin-right: 8px;
  text-decoration: none;
  color: ${(prop) => prop.pageActive? Colors.redColor : Colors.whiteColor};

  &:hover {
    background-color: ${(prop) => prop.pageActive? Colors.blackB : Colors.BlackW};
  }
`

export const SaveButton = styled(Botao)`
  background-color: ${Colors.blackB};

  &:hover {
    background-color: ${Colors.BlackW};
  }
`

export const EdButtonCancel = styled(Botao)<EdButtonCancelType>`
  background-color: ${(prop) => prop.conjunto == 'editar'? Colors.blackGray : Colors.BlackW};

  &:hover {
    background-color: ${(prop) => prop.conjunto == 'editar'? Colors.blackGray : Colors.BlackW};
  }
`

export const DeleteButton = styled(Botao)<DelButtonType>`
  background-color: ${Colors.redColor};

  &:hover {
    background-color: ${Colors.blackGray};
  }
`

export const BotaoLink2 = styled(BotaoLink)`
font-size: 30px;
padding-top: 10px;
color: #fff;
background-color: ${Colors.blackB};
  padding-bottom: 10px;

  &:hover {
    background-color: ${Colors.BlackW};
  }
`

export const BotaoCadastrar = styled(Botao)`
  background-color: ${Colors.blackGray};
  width: 146px;
  margin-top: 46px;
  font-size: 18px;

  &:hover {
    background-color: ${Colors.BlackW};
  }
`

export const Campo = styled.input`
  padding: 6px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: none;
  border-radius: 4px;
  font-weight: bold;
  color: ${Colors.blackB};
  border-color: ${Colors.blackB};
  width: 100%;
`

export const Telefone = styled(InputMask)`
  padding: 6.7px;
  border-radius: 4px;
  background-color: #fff;
  font-weight: bold;
  color: ${Colors.blackB};
  border-color: ${Colors.blackB};
  width: 100%;
`


export default GlobalStyle
