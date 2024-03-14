import { useNavigate } from 'react-router-dom'
import { ButtonSaved, ButtonCancel } from '../../styles'
import { Form, Input } from './styles'
import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contact.reducer'

const FormCad = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [tell, setTell] = useState('')
  const [email, setEmail] = useState('')

  const salveContact = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        name,
        tell,
        email
      })
    )

    navigate('/')
  }

  return (
    <Form onSubmit={salveContact}>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="nome"
        id="nome"
        placeholder="Nome principal"
      />
      <Input
        value={tell}
        onChange={(e) => setTell(e.target.value)}
        type="tel"
        name="tell"
        id="tell"
        placeholder="Telefone"
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <ButtonSaved type="submit">salvar</ButtonSaved>
      <ButtonCancel onClick={() => navigate('/')}>cancelar</ButtonCancel>
    </Form>
  )
}

export default FormCad
