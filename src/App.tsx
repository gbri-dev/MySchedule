import GlobalStyle, { Container } from './styles'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <h1>Agenda de Contatos</h1>
        <RouterProvider router={rotas} />
      </Container>
    </div>
  )
}

export default App
