import styled from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';


export const ChartLineStyle = styled('div')`
	${FlexDiv}
	padding: 20px;
	border-radius: 10px;
    border: 1px solid white;
    width: 90%;
    height: 35px;
`;


export const ChartsContainer = styled('div')`
    ${FlexDiv};
    flex-direction: column;
    width: 100%;
    gap:10px;
`