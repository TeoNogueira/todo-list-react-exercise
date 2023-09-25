import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../../components/Contato'
import { Container, Titulo , BotaoLink2 } from '../../styles/'
import * as S from './styles'


const ContactsList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const contactsMsg = (quantity: number) => {
    if (quantity == 0) {
      return "Agenda Vazia"
    } else {
      return "Meus contatos:"
    }
  }
  const apply = itens.length > 0
  const mensagem: string = contactsMsg(itens.length)

  return (
    <Container>
      <Titulo as={'p'} ativo={!apply}>{mensagem}</Titulo>
      <S.ListaCards>
        {itens.map((t) => (
          <S.CardTemplate key={t.id}>
            <Contato
              id={t.id}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
            />
          </S.CardTemplate>
        ))}
      </S.ListaCards>
      <BotaoLink2 className={'botaoCadastrar'} pageActive={false} to={'/register'}>Cadastre agora!</BotaoLink2>
    </Container>
  )
}

export default ContactsList
