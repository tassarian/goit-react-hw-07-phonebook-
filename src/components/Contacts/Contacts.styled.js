import styled from 'styled-components';

export const StyledContactsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledContactList = styled.ul`
	padding-left: 0px;
	list-style: none;
	li {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;
		&:not(:last-of-type) {
			padding-bottom: 5px;
			border-bottom: 1px solid darkgray;
		}
		&:not(:first-of-type) {
			margin-top: 5px;
		}

		span {
			font-weight: 600;
		}
	}
`;

export const StyledContactItem = styled.li``;

export const StyledDeleteBtn = styled.button`
	margin-left: 10px;

	border: 1px solid red;
	border-radius: 4px;
	background-color: lightgray;
	transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
	&:active {
		background-color: darkgrey;
	}
`;

export const StyledTitle = styled.h3`
	margin-bottom: 10px;
	text-align: center;
`;

export const StyledSearch = styled.input`
	margin-bottom: 15px;
`;

export const StyledSearchTitle = styled.h4`
	margin-bottom: 10px;
`;
