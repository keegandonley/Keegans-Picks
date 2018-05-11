import styled from 'styled-components';
import { getDivBorder, responsive } from '../../utils';

const edgePadding = 20;

export const Row = styled.div`
	width: 100%;
	display: flex;
	${responsive.tablet`
		width: calc(100% - ${edgePadding * 3}px);
		flex-direction: column;
	`}
	${responsive.phone`
		width: calc(100% - ${edgePadding * 3}px);
		flex-direction: column;
	`}
	${props => getDivBorder(props.styleCode)}

`;

export const Column = styled.div`
	width: 100%;
	margin-left: ${edgePadding}px;
	margin-right: ${edgePadding}px;
	padding-left: ${edgePadding}px;
	padding-top: ${edgePadding}px;
	padding-bottom: ${edgePadding}px;
	margin-top: 10px;
	margin-bottom: 10px
	${props => getDivBorder(props.styleCode)}
`;

