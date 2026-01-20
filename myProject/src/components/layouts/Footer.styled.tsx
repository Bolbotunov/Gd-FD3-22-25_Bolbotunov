import styled from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';
import { FontsFamily } from '../../styles/Fonts.styled';

export const FooterStyle = styled('footer')`
  ${FlexDiv};
  width: 100%;
  height: 60px;
  justify-content: space-between;
`;

export const FooterBlock = styled('div')`
  ${FlexDiv};
  max-width: 400px;
  width: 100%
  justify-content: center;
  

`;

export const FooterDivText = styled('div')`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  ${FontsFamily};
  width: 100%;
  font-weight: 500;
  margin-bottom: 4px;
  font-size: calc(7px + 0.5vw);
  ${({ theme }) => theme.breakpoints.max('md')} {
    font-size: 12px;
  }
`;

export const FooterLink = styled('a')`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  ${FontsFamily};
`;

export const FooterLogo = styled('img')`
  height: 30px;
  max-width: 100%;
  margin: 0 10px;
  position: relative;
  top: 0px;

  ${({ theme }) => theme.breakpoints.max('md')} {
    height: 25px;
  }
  ${({ theme }) => theme.breakpoints.max('sm')} {
    height: 40px;
  }
`;
