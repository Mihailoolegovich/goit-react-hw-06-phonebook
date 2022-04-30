import { configureStore, createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      console.log('state.items.', state.items);
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },

    filterChange(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterChange } =
  contactsSlice.actions;

export const store = configureStore({
  reducer: { contacts: contactsSlice.reducer },
});
