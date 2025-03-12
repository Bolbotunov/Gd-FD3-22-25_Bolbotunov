import styled from 'styled-components';
import { FlexDiv} from '../../styles/Common.styled';
import { FontsFamily } from '../../styles/Fonts.styled';


export const InformationBlock = styled('div')`
	${FlexDiv};
	flex-direction: column;
	gap: 20px;
	flex: 1;
	padding: 30px;
	text-align: center;
`;


export const WrapperSections = styled('div')`
	${FlexDiv};
  width: 100%;
  height:100vh;
`;



export const WhiteBlock = styled('div')`
  ${FontsFamily};
	${FlexDiv};
  font-weight: 600;
  font-size: calc(24px + 10%);
  width: 90%;
	margin: 0px;
  color: ${props => props.theme.colors.WHITE_COLOR};
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;
  background-color: ${props => props.theme.colors.MAIN_COLOR_30};
  padding: 10px;
  height: 65px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;


export const UserMail = styled('p')`
  ${FontsFamily};
  color: ${props => props.theme.colors.WHITE_COLOR};
`