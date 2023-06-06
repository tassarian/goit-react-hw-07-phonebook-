import React, { useState } from 'react';
import {
	StyledPhonebook,
	StyledBtn,
	StyledInput,
	StyledTitle,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';

export const Form = () => {

	const [name, setName] = useState('')
	const [number, setNumber] = useState('')

	const dispatch = useDispatch();

	const contacts = useSelector(selectContacts);

	const handleSubmit = evt => {
		evt.preventDefault();

		const form = evt.target;
		const existingContact = contacts.find(
			contact =>
				contact.name === name ||
				contact.number === number
		);
		if (!existingContact) {
			dispatch(
				addContact({
					id: nanoid(),
					name: name,
					number: number,
				})
			);
			form.reset();
			setName('')
			setNumber('')
		} else {
			alert(`${name} or ${number} is already in contacts`)
			form.reset();
			setName('')
			setNumber('')
		}
		
		
	};

	return (
		<StyledPhonebook onSubmit={handleSubmit}>
			<StyledTitle>Name</StyledTitle>
			<StyledInput
				placeholder="Put name here"
				type="text"
				name="name"
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				onChange={e=>setName(e.target.value)}
				required
				value={name}
			></StyledInput>
			<StyledInput
				placeholder="Put number here"
				type="tel"
				name="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				onChange={e=>setNumber(e.target.value)}
				required
				value={number}
			></StyledInput>
			<StyledBtn type="submit">Add contact</StyledBtn>
		</StyledPhonebook>
	);
};
