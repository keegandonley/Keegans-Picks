import styled from 'styled-components';
import { system } from '../styles';

export const Paragraph = styled.p`
	font-family: ${system};
	font-size: ${props => (props.scale ? props.scale : 1)}em;
`;

export const SectionHeader = styled.h1`
	margin: 0;
	font-family: ${system};
`;

export const Header = styled.h2`
	margin: 0;
	font-family: ${system};
`;

export const Title = styled.h3`
	margin: 0;
	font-family: ${system};
`;
