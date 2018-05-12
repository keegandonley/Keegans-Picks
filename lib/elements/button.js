import styled from 'styled-components';
import { system } from '../styles';


const defaultColor = 'rgb(162, 80, 128)';

export default styled.a`
	width: 300px;
	color: ${props => (props.color ? props.color : defaultColor)};
	border: 2px solid ${props => (props.color ? props.color : defaultColor)};
	height: 50px;
	margin-top: 20px;
	border-radius: 20px;
	border-bottom: 4px solid ${props => (props.color ? props.color : defaultColor)};
	border-right: 4px solid ${props => (props.color ? props.color : defaultColor)};
	display: flex;
	align-items: center;	
	margin: 0 auto;
	margin-top: 40px;

	&:hover {
		cursor: pointer;
		transform: translate(2px, 2px);
	}
	& span {
		width: 100%;
		text-align: center;
		font-family: ${system};
	}

`;
