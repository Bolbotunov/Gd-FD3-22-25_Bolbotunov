import styled from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';
import { slide as Menu } from 'react-burger-menu';

export const NavStyle = styled('nav')`
  ${FlexDiv};
  width: 55%;
  height: 80px;
  justify-content: space-around;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.max('sm')} {
    display: none;
  }
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
    height: 45px;
  }
  ${({ theme }) => theme.breakpoints.max('sm')} {
    height: 35px;
  }
`;

export const StyledMenu = styled(Menu)`
  position: absolute;
  .bm-burger-button {
    background: ${({ theme }) => theme.colors.ADDITIONAL_COLOR};
    border: 1px solid red;
    position: absolute;
    width: 36px;
    height: 30px;
    left: 0px;
    top: 0px;
  }

  .bm-burger-bars {
    background: 'red';
  }

  button#react-burger-menu-btn {
    position: fixed;
    width: 40px;
    height: 40px;
    left: 10px;
    top: 10px;
    background-color: red;
    z-index: 1000;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: ${({ theme }) => theme.colors.ADDITIONAL_COLOR};
  }

  .bm-menu {
    background: ${({ theme }) => theme.colors.DICT_BTN_COLOR};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-item-list {
    color: ${({ theme }) => theme.colors.ADDITIONAL_COLOR};
    padding: 0.8em;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
  }

  .bm-item {
    display: inline-block;
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
