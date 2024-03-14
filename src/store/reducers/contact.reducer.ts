import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact.class'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      name: 'tech gol',
      tell: '27 99841-6139',
      email: 'dgtechgo@dgtechgo.com'
    },
    {
      id: 2,
      name: 'Gabriel',
      tell: '27 99987-7446',
      email: 'gabriel.camposdasilva@hotmail.com'
    },
    {
      id: 3,
      name: 'Stéfany',
      tell: '27 99857-2883',
      email: 'sennaoficial55@gmail.com'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contact>) => {
      const indexContact = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexContact >= 0) {
        state.itens[indexContact] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const isContact = state.itens.find(
        (contact) =>
          contact.tell.toLowerCase() === action.payload.tell.toLowerCase()
      )
      if (isContact) {
        alert('Já existe esse contato!')
      } else {
        const latestContact = state.itens[state.itens.length - 1]

        const newContact = {
          ...action.payload,
          id: latestContact ? latestContact.id + 1 : 1
        }

        state.itens.push(newContact)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contactSlice.actions

export default contactSlice.reducer
