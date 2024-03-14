import * as C from './styles'
import { Buttons, ButtonCancel } from '../../styles'
import ContactClass from '../../models/Contact.class'

type Props = ContactClass

const Contact = ({ id, name, tell, email }: Props) => {
  return (
    <C.Card>
      <input type="number" value={id} hidden />
      <C.Campo value={name} />
      <C.Campo value={tell} />
      <C.Campo value={email} />
      <Buttons type="button">Editar</Buttons>
      <ButtonCancel type="button">Remover</ButtonCancel>
    </C.Card>
  )
}

export default Contact
