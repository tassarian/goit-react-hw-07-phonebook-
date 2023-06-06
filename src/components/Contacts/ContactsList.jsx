import { useDispatch } from 'react-redux';
import { StyledDeleteBtn } from './Contacts.styled';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
	const dispatch = useDispatch();

	

	return (
		<>
			<span>{contact.name}</span>: {contact.number}
			<StyledDeleteBtn
				onClick={() => dispatch(deleteContact(contact.id))}
				type="button"
			>
				Delete
			</StyledDeleteBtn>
		</>
	);
};
