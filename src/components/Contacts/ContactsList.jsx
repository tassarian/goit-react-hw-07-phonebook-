import { useDispatch } from 'react-redux';
import { StyledDeleteBtn } from './Contacts.styled';
import { deleteContactThunk } from 'redux/operations';

export const Contact = ({ contact }) => {
	const dispatch = useDispatch();

	

	return (
		<>
			<span>{contact.name}</span>: {contact.number}
			<StyledDeleteBtn
				onClick={() => dispatch(deleteContactThunk(contact.id))}
				type="button"
			>
				Delete
			</StyledDeleteBtn>
		</>
	);
};

