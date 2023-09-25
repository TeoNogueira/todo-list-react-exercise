import styled from 'styled-components'
import { Colors } from '../../styles/variaveis'

export const StForm = styled.form`
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  margin: auto;
  font-weight: bold;
  font-size: 18px;
  color: ${Colors.grayColorSimple};
  align-items: center;

`

export const divForm = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 80px;

  label {
    width: 300px;
    padding-right: 10px;
    text-align: end;
  }
`

export const errorText = styled.p`
  color: red;
  font-size: 10px;
 paddin-left: 80px;
`

