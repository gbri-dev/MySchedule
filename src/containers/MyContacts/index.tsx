import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'

const MyContacts = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)
  const contacts = itens

  const count = (qtd: number) => {
    let message = ''
    if (qtd > 0) {
      message = `${qtd} contato(s) cadastrado(s)`
    } else {
      message = 'Nenhum contato foi cadastrado!'
    }

    return message
  }

  return (
    <main>
      <p>{count(contacts.length)}</p>
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            <Contact id={c.id} name={c.name} tell={c.tell} email={c.email} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default MyContacts
