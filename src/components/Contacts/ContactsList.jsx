import { useDispatch } from 'react-redux';
import { StyledDeleteBtn } from './Contacts.styled';
import { deleteContactThunk } from 'redux/operations';
import PropTypes from 'prop-types';

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

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
};
