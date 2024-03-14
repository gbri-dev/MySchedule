import Contact from '../../components/Contact'

const MyContacts = () => {
  const pessoas = [
    {
      id: 1,
      nome: 'Gabriel',
      tell: '27 99987-7446',
      email: 'gabriel.camposdasilva@hotmail.com'
    },
    {
      id: 2,
      nome: 'Stéfany',
      tell: '27 99857-2883',
      email: 'sennaoficial55@gmail.com'
    },
    {
      id: 3,
      nome: 'tech gol',
      tell: '27 99841-6139',
      email: 'dgtechgo@dgtechgo.com'
    }
  ]
  return (
    <main>
      <p>{pessoas.length} contatos cadastrados</p>
      <ul>
        <li>
          {pessoas.map((c) => (
            <li key={c.id}>
              <Contact id={c.id} name={c.nome} tell={c.tell} email={c.email} />
            </li>
          ))}
        </li>
      </ul>
    </main>
  )
}

export default MyContacts
