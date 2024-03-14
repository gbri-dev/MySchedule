import { useNavigate } from 'react-router-dom'
import { ButtonSaved, ButtonCancel } from '../../styles'
import { Form, Input } from './styles'

const FormCad = () => {
  const navigate = useNavigate()

  return (
    <Form>
      <Input type="text" name="nome" id="nome" placeholder="Nome principal" />
      <Input type="tel" name="nome" id="nome" placeholder="Telefone" />
      <Input type="email" name="nome" id="nome" placeholder="Email" />
      <ButtonSaved>salvar</ButtonSaved>
      <ButtonCancel onClick={() => navigate('/')}>cancelar</ButtonCancel>
    </Form>
  )
}

export default FormCad
