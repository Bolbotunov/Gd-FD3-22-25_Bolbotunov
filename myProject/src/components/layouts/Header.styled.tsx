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
