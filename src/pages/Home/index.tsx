import Header from '../../containers/Header'
import { Container } from '../../styles'
import ContactsList from '../../containers/ContactsList'

const Home = () => (
  <>
    <Header page="home" />
    <Container>
      <ContactsList />
    </Container>
  </>
)

export default Home
