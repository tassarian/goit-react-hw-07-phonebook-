const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
	contacts: [],
	filter: "",
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: (state, action) => {
			state.contacts.push(action.payload);
		},
		deleteContact: (state, action) => {
			const index = state.contacts.findIndex(contact => contact.id === action.payload)
			state.contacts.splice(index, 1)
		},
		setFilter: (state, action) => {
			state.filter = action.payload
		}
	},
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer
