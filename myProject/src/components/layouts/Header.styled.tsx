import styled, { css } from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';

const MobileMenuOverlay = css`
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
`;

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

export const StyledMobileMenu = styled('div')<{ $isOpen: boolean }>`
  position: fixed;
  top: 80px;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 100%;
  height: calc(100vh - 80px);
  background-color: ${({ theme }) => theme.colors.MOBILE_MENU};
  z-index: 999;
  transition:
    right 0.4s ease,
    opacity 0.4s ease;
  padding: 2rem 1.5rem;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  overflow: hidden;

  ${({ $isOpen }) => $isOpen && MobileMenuOverlay}
`;
