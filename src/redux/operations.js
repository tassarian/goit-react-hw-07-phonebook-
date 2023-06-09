import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from  'axios';

axios.defaults.baseURL = 'https://647f4289c246f166da9071a1.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
	'contacts/fetch',
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get('contacts');
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const addContactThunk = createAsyncThunk(
	'contact/add',
    async (contact, thunkAPI) => {
        try {
            const {data} = await axios.post('contacts', contact)
            return data
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contact/delete',
    async (id, thunkAPI) => {
        try {
            await axios.delete(`contacts/${id}`)
            return id
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    },
    {
        condition: (_, thunkAPI) => {
            const loading =thunkAPI.getState().contacts.isLoading
            if (loading) {
                return false
            }
        }
    }
)
