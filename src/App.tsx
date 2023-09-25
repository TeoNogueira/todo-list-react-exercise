import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle from './styles'
import Home from './pages/Home'

import store from './store'
import Register from './pages/Register'

const rotas = createBrowserRouter([
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <Home />
  },

])

function App() {
  return (
    <Provider store={store}>
    <GlobalStyle />
        <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
