import styled from 'styled-components';

export const StyledPhonebook = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid darkgray;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 10px;
    width: max-content;
`

export const StyledTitle = styled.h3`

`

export const StyledInput = styled.input`

`

export const StyledBtn = styled.button`
    padding: 5px 10px;
    width: 100px;
    border: 0;
    border-radius: 4px;
    background-color: lightgray;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:active {
		background-color: darkgrey;
    }
`