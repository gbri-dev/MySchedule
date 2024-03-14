import { useDispatch } from 'react-redux'
import { editar, remover } from '../../store/reducers/contact.reducer'
import * as C from './styles'
import { Buttons, ButtonCancel, ButtonSaved } from '../../styles'
import ContactClass from '../../models/Contact.class'
import { useEffect, useState } from 'react'

type Props = ContactClass

const Contact = ({
  id,
  name: nameOrigin,
  tell: tellOrigin,
  email: emailOrigin
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [tell, setTell] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nameOrigin.length > 0) {
      setName(nameOrigin)
    }
    if (tellOrigin.length > 0) {
      setTell(tellOrigin)
    }
    if (emailOrigin.length > 0) {
      setEmail(emailOrigin)
    }
  }, [nameOrigin, tellOrigin, emailOrigin])

  function cancelEdit() {
    setEditing(false)
    setName(nameOrigin)
    setTell(tellOrigin)
    setEmail(emailOrigin)
  }

  return (
    <C.Card>
      <input type="number" value={id} hidden />
      <C.Campo
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={!editing}
      />
      <C.Campo
        onChange={(e) => setTell(e.target.value)}
        value={tell}
        disabled={!editing}
      />
      <C.Campo
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={!editing}
      />
      {editing ? (
        <>
          <ButtonSaved
            onClick={() => {
              dispatch(
                editar({
                  id,
                  name,
                  tell,
                  email
                })
              )
              setEditing(false)
            }}
          >
            Salvar
          </ButtonSaved>
          <ButtonCancel onClick={cancelEdit}>Cacelar</ButtonCancel>
        </>
      ) : (
        <>
          <Buttons onClick={() => setEditing(true)}>Editar</Buttons>
          <ButtonCancel onClick={() => dispatch(remover(id))}>
            Remover
          </ButtonCancel>
        </>
      )}
    </C.Card>
  )
}

export default Contact
