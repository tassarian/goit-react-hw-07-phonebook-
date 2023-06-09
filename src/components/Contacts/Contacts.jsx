import { useDispatch, useSelector } from 'react-redux';
import {
	StyledSearch,
	StyledSearchTitle,
	StyledTitle,
	StyledContactsContainer,
	StyledContactList,
} from './Contacts.styled';
import { Contact } from './ContactsList';
import { selectContacts, selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';

export const Contacts = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContactsThunk());
	}, [dispatch]);

	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectFilter);
	let contactsList = contacts;

	if (filter) {
		contactsList = contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		);
	}

	return (
		<StyledContactsContainer>
			<StyledTitle>Contacts</StyledTitle>
			<StyledSearchTitle>Find contacts by name</StyledSearchTitle>
			<StyledSearch
				type="text"
				placeholder="Put name for search here"
				onChange={evt => dispatch(setFilter(evt.target.value))}
				value={filter}
			/>
			<StyledContactList>
				{contactsList.map(contact => (
					<li key={contact.id}>
						<Contact contact={contact} />
					</li>
				))}
			</StyledContactList>
		</StyledContactsContainer>
	);
};
