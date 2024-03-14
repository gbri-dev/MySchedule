const Contact = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="E-mail principal" />
        <input type="tel" placeholder="(xx) XXX.XXX.XXX" />
      </div>
      <ul>
        <li>Nome: </li>
        <li>E-mail</li>
        <li>Telefone</li>
      </ul>
      <button type="button">Editar</button>
      <button type="button">Remover</button>
    </div>
  )
}

export default Contact
