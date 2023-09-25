import styled from "styled-components"
import { Colors } from "../../styles/variaveis"

export const Header = styled.header`
width: 100%;
display: flex;
text-align: center;
justify-content: center;
margin-bottom: 2px;
height: 170px;
`

export const DivHeader = styled.div`
background-color: ${Colors.darkerGreenColor};
text-align: center;
height: 88%;
margin: auto;
width: 26%;
margin-top: 10px;
border-radius: 4px;
`

export const TitleHeader = styled.h2`
  padding-bottom: 28px;
  padding-top: 26.5px;
  font-size: 40px;
  color: ${Colors.whiteColor};
`

