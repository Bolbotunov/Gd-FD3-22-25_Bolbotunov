import styled from 'styled-components';
import { FlexDiv, WhiteBlock } from '../../styles/Common.styled';
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
  height: auto;
`;

export const RecommendedkCalBlock = styled('div')`
  ${WhiteBlock};
  ${FontsFamily};
  font-weight: 600;
  font-size: calc(24px + 10%);
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR_30};
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  justify-content: space-around;
  height: 65px;
`;

export const UserMail = styled('p')`
  ${FontsFamily};
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
`;
