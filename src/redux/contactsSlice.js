import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsBook: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contactsBook.push(action.payload);
    },
    filterValue: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.contactsBook = state.contactsBook.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, filterValue, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
