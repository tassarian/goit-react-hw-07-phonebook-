import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    body{
		padding:0;
		margin: 0;
		
		*{
			box-sizing: border-box;
		}
        h2,
        h3,
        h4{
            margin: 0;
        }
        p{
            margin: 0;
        }
        ul{
            margin: 0;
        }
        li{
            margin: 0;
        }
	}
`;

export const Section = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	/* justify-content: ${props => props.justify || 'stretch'}; */
	align-items: ${props => props.items || 'stretch'};
	height: ${props => props.h || 'auto'};
    width: max-content;
    margin-left: auto;
    margin-right: auto;
`;

export const Title = styled.h1`
    text-align: center;
`