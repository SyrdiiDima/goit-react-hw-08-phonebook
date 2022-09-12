import { createSlice } from '@reduxjs/toolkit';

// const initialState = { filter: '' };

export const contactSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = contactSlice.actions;
