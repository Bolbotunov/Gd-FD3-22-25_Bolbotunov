import { styled, css } from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';
import { FontsFamily } from '../../styles/Fonts.styled';

export const ProductRowStat = styled('div')`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const MessageStyle = styled('h3')`
  ${FontsFamily};
  margin: 20px 0px;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;
