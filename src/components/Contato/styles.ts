import styled from 'styled-components'
import { Colors } from '../../styles/variaveis'
import InputMask from "react-input-mask";

export type MyInp = {
  myWidth: number;
}

export const DivInput = styled.div`
  margin-bottom: 12px;

  label {
    color: ${Colors.darkGrayColor};
    font-size: 16px;
  }
`

export const Card = styled.div`
  background-color: #fff;
  filter: drop-shadow(8px 8px 8px #4db680);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`



export const Nome = styled.input<MyInp>`
  font-size: 17px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  width: 240px;
  border: 2px solid ${Colors.blackB};
  border-radius: 4px;
  padding-left: 4px;

  &:disabled {
    border: none;
    text-align: center;
    color: ${Colors.blackB};
    width: ${({ myWidth }) => myWidth * 9.3}px;
  }
`

export const Email = styled.input<MyInp>`]
  margin-left: 6px;
  font-size: 16px;
  font-weight: normal;
  padding-left: 4px;
  margin-right: 10px;
  width: 190px;
  border: 2px solid ${Colors.blackB};
  border-radius: 4px;



  &:disabled {
    border: none;
    text-align: center;
    color: ${Colors.blackB};
    width: ${({ myWidth }) => myWidth * 9}px;
    margin-left: 0;
  }
`

export const Telefone = styled(InputMask)<MyInp>`
  font-size: 16px;
  font-weight: normal;
  margin-left: 2px;
  margin-right: 10px;
  width: 130px;
  padding-left: 4px;
  border: 2px solid ${Colors.blackB};
  border-radius: 4px;
  margin-left: 4px;

  &:disabled {
    border: none;
    text-align: center;
    color: ${Colors.blackB};
    width: ${({ myWidth }) => myWidth * 9}px;
    margin-left: 0;
  }
`

export const BarraAcoes = styled.div`
  border-top: 5px solid rgba(0, 0, 0, 0.5);
  padding-top: 16px;
`

export const TextoEditando = styled.em`
  padding-left: 55px;
  font-size: 20px;
`

export const ErrorTextNome = styled.p`
user-select: none;
font-size: 10px;
padding-right: 160px;
color: crimson;
  `
  export const ErrorTextTelefone = styled.p`
  user-select: none;
  font-size: 10px;
  padding-right: 120px;
  color: crimson;
  `

export const ErrorTextEMail = styled.p`
user-select: none;
font-size: 10px;
color: red;
padding-right: 98px;
`

