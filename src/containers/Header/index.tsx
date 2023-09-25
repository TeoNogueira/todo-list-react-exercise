import { BotaoLink } from '../../styles'
import * as S from './styles'
import HeaderClass from '../../models/header'

const Header = ({
  page,
}: HeaderClass) => {
  const paginaAtual = page;

  return (
  <S.Header>
    <S.DivHeader>
      <S.TitleHeader>Minha Agenda</S.TitleHeader>
      {
        paginaAtual == 'home'?
        (
          <>
            <BotaoLink pageActive={true} to="/">Agenda</BotaoLink>
            <BotaoLink className={'botaoCadastrar'} pageActive={false} to="/register">Salvar contato</BotaoLink>
          </>
        ) : (
          <>
            <BotaoLink pageActive={false} to="/">Agenda</BotaoLink>
            <BotaoLink className={'botaoCadastrar'} pageActive={true} to="/register">Salvar contato</BotaoLink>
          </>
        )
      }
    </S.DivHeader>
  </S.Header>
  )
}

export default Header
