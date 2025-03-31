import styled from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';
import { FontsFamily } from '../../styles/Fonts.styled';

export const FooterStyle = styled('footer')`
  ${FlexDiv};
  width: 100%;
  height: 80px;
  justify-content: space-between;
`;

export const FooterBlock = styled('div')`
  ${FlexDiv};
  width: 25%;
  max-width: 100%
  justify-content: space-between;
`;

export const FooterDivText = styled('div')`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  ${FontsFamily};
  font-weight: 600;
  margin-top: 7px;
  padding: 10px;
  font-size: calc(8px + 10%);
`;

export const FooterLink = styled('a')`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  ${FontsFamily};
  font-weight: 600;
  font-size: calc(9px + 10%);
`;
