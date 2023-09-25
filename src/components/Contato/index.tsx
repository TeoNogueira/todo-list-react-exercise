import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import ContatoClass from '../../models/contato'
import { editar, remover } from '../../store/reducers/contatos'
import { SaveButton, EdButtonCancel, DeleteButton } from '../../styles'
import * as S from './styles'



const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
}: ContatoClass) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [estaEditandoNome, setEstaEditandoNome] = useState(false)
  const [estaEditandoEmail, setEstaEditandoEmail] = useState(false)
  const [estaEditandoTelefone, setEstaEditandoTelefone] = useState(false)
  const dispatch = useDispatch()
  const todosBotoes = Array.from(document.getElementsByClassName('botaoCard') as HTMLCollectionOf<HTMLElement>)
  const botoesCadastrar = Array.from(document.getElementsByClassName('botaoCadastrar') as HTMLCollectionOf<HTMLElement>)
  const [errorTelefone, setErrorTelefone] = useState(false)

  useEffect(() => {
    nomeOriginal.length > 0 && setNome(nomeOriginal)
  }, [nomeOriginal])

  useEffect(() => {
    emailOriginal.length > 0 && setEmail(emailOriginal)
  }, [emailOriginal])

  useEffect(() => {
    telefoneOriginal.length > 0 && setTelefone(telefoneOriginal)
  }, [telefoneOriginal])

  useEffect(() => {
    const inputDoMomento = document.getElementById(nome)
    if (estaEditandoNome == true) {
      todosBotoes.forEach((botao) => botao.style.visibility = "hidden")
      botoesCadastrar.forEach((botao) => botao.style.visibility = "hidden")
      inputDoMomento?.focus()
      console.log(inputDoMomento?.parentElement)
      if (inputDoMomento !== null && inputDoMomento?.parentElement !== null && inputDoMomento?.parentElement?.parentElement !== null) {
        inputDoMomento.parentElement.parentElement.style.border = '3.5px solid orange'
      }
    }
    else {
      todosBotoes.forEach((botao) => botao.style.visibility = "visible")
      botoesCadastrar.forEach((botao) => botao.style.visibility = "visible")
      if (inputDoMomento !== null && inputDoMomento?.parentElement !== null && inputDoMomento?.parentElement?.parentElement !== null) {
        inputDoMomento.parentElement.parentElement.style.border = 'none'
      }
    }
  }, [estaEditandoNome])

  useEffect(() => {
    const inputDoMomento = document.getElementById(email)
    if (estaEditandoEmail == true) {
      todosBotoes.forEach((botao) => botao.style.visibility = "hidden")
      botoesCadastrar.forEach((botao) => botao.style.visibility = "hidden")
      inputDoMomento?.focus()
      console.log(inputDoMomento?.parentElement)
      if (inputDoMomento !== null && inputDoMomento?.parentElement !== null && inputDoMomento?.parentElement?.parentElement !== null) {
        inputDoMomento.parentElement.parentElement.style.border = '3.5px solid orange'
      }
    }
    else {
      todosBotoes.forEach((botao) => botao.style.visibility = "visible")
      botoesCadastrar.forEach((botao) => botao.style.visibility = "visible")
      if (inputDoMomento !== null && inputDoMomento?.parentElement !== null && inputDoMomento?.parentElement?.parentElement !== null) {
        inputDoMomento.parentElement.parentElement.style.border = 'none'
      }
    }
  }, [estaEditandoEmail])

  useEffect(() => {
    const inputDoMomento = document.getElementById(telefone)
    if (estaEditandoTelefone == true) {
      todosBotoes.forEach((botao) => botao.style.visibility = "hidden")
      botoesCadastrar.forEach((botao) => botao.style.visibility = "hidden")
      inputDoMomento?.focus()
      if (inputDoMomento !== null && inputDoMomento?.parentElement !== null && inputDoMomento?.parentElement?.parentElement !== null) {
        inputDoMomento.parentElement.parentElement.style.border = '2.1px solid blue'
      }
    }
    else {
      todosBotoes.forEach((botao) => botao.style.visibility = "visible")
      botoesCadastrar.forEach((botao) => botao.style.visibility = "visible")
      if (inputDoMomento !== null && inputDoMomento?.parentElement !== null && inputDoMomento?.parentElement?.parentElement !== null) {
        inputDoMomento.parentElement.parentElement.style.border = 'none'
      }
    }
  }, [estaEditandoTelefone])

  function cancelarEdicaoNome() {
    setEstaEditandoNome(false)
    setNome(nomeOriginal)
  }

  function cancelarEdicaoEmail() {
    setEstaEditandoEmail(false)
    setEmail(emailOriginal)
  }

  function cancelarEdicaoTelefone() {
    setEstaEditandoTelefone(false)
    setTelefone(telefoneOriginal)
  }

return (
  <S.Card>
    <S.DivInput>
      <S.Nome
         type="text"
        id={nome}
        disabled={!estaEditandoNome}
        value={nome}
          onChange={(evento: ChangeEvent<HTMLInputElement>) => setNome(evento.target.value)}
         widthInput={nome.length}
        />
        {estaEditandoNome ? (
          <>
            <SaveButton
              onClick={() => {
              if (nome !== "") {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditandoNome(false)
              }}}
            >
              Salvar
            </SaveButton>
            <EdButtonCancel className='botaoCard' categoria='cancelar' onClick={cancelarEdicaoNome}>
              Cancelar
            </EdButtonCancel>
            {nome == "" && (
              <S.ErrorTextNome>Por favor, preencha o nome corretamente!</S.ErrorTextNome>
            )}
          </>
        ) : (
          <>
            <EdButtonCancel className='botaoCard' categoria='editar' onClick={() => setEstaEditandoNome(true)}>Editar</EdButtonCancel>
          </>
        )}
      </S.DivInput>
      <S.DivInput>
        <label htmlFor={email}>E-mail:</label>
        <S.Email
          type="mail"
          id={email}
          disabled={!estaEditandoEmail}
          value={email}
          onChange={(evento: ChangeEvent<HTMLInputElement>) => setEmail(evento.target.value)}
          widthInput={email.length}
        />
        {estaEditandoEmail ? (
          <>
            <SaveButton
              onClick={() => {
                if (email !== "") {
                  dispatch(
                    editar({
                      nome,
                      email,
                      telefone,
                      id
                    })
                  )
                  setEstaEditandoEmail(false)
                }}}
            >
              Salvar
            </SaveButton>
            <EdButtonCancel className='botaoCard' categoria='cancelar' onClick={cancelarEdicaoEmail}>
              Cancelar
            </EdButtonCancel>
            {email == "" && (
              <S.ErrorTextEMail>Por favor, preencha o e-mail corretamente!</S.ErrorTextEMail>
            )}
          </>
        ) : (
          <>
            <EdButtonCancel className='botaoCard' categoria='editar' onClick={() => setEstaEditandoEmail(true)}>Editar</EdButtonCancel>
          </>
        )}
      </S.DivInput>
      <S.DivInput>
        <label htmlFor={telefone.toString()}>Telefone:</label>
        <S.Telefone
            mask={"(99) 99999-9999"}
            maskPlaceholder={""}
            id={telefone.toString()}
            disabled={!estaEditandoTelefone}
            value={telefone}
            onChange={(evento: ChangeEvent<HTMLInputElement>) => setTelefone(evento.target.value)}
            widthInput={(telefone.toString()).length}
          />
        {estaEditandoTelefone ? (
          <>
            <SaveButton
              onClick={() => {
                if (telefone.length > 14) {
                  dispatch(
                    editar({
                      nome,
                      email,
                      telefone,
                      id
                    }));
                  setEstaEditandoTelefone(false)
                  setErrorTelefone(false)
                }
                else {
                  setErrorTelefone(true)
                }

              }}
            >
              Salvar
            </SaveButton>
            <EdButtonCancel className='botaoCard' categoria='cancelar' onClick={cancelarEdicaoTelefone}>
              Cancelar
            </EdButtonCancel>
            {errorTelefone && telefone.length < 15 && (
              <S.ErrorTextTelefone>Por favor, preencha o telefone corretamente!</S.ErrorTextTelefone>
            )}
          </>
        ) : (
          <>
            <EdButtonCancel className='botaoCard' categoria='editar' onClick={() => setEstaEditandoTelefone(true)}>Editar</EdButtonCancel>
          </>
        )}
      </S.DivInput>

      <S.BarraAcoes>
        {(estaEditandoTelefone || estaEditandoEmail || estaEditandoNome) && (
          <S.TextoEditando>
            Editando...
          </S.TextoEditando>
        )}
        <DeleteButton className={'botaoCard'} categoria='remover' onClick={() => dispatch(remover(id))}>
          Remover
        </DeleteButton>
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
