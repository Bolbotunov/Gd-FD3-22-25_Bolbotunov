import styled from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';

export const NavStyle = styled('nav')`
  ${FlexDiv};
  width: 55%;
  height: 80px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const HeaderStyle = styled('nav')`
  ${FlexDiv};
  width: 100%;
  height: 80px;
  justify-content: space-between;
  gap: 10px;
`;

export const HeaderLogo = styled('img')`
  height: 50px;
  max-width: 100%;
  margin: 0 10px;
  position: relative;
  top: 5px;

  ${({ theme }) => theme.breakpoints.max('md')} {
    height: 40px;
  }
  ${({ theme }) => theme.breakpoints.max('sm')} {
    height: 25px;
  }
`;
