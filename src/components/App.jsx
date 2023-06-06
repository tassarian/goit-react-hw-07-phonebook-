import { Section, Title } from './Global.styled';

import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
	return (
		<Section direction="column" justify="center" items="center">
			<Title>Phonebook</Title>
			<Form />
			<Contacts />
		</Section>
	);
};
