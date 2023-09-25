import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Teo Nogueira',
      email: 'Teo12333312@gmail.com',
      telefone: '(22) 1998820-7879'
    },
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
     editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id == action.payload.id
      )
      indexDoContato >= 0 && (state.itens[indexDoContato] = action.payload)
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Este contato já foi cadastrado!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
  }
})

export const { remover, editar, cadastrar } =
contatosSlice.actions

export default contatosSlice.reducer
