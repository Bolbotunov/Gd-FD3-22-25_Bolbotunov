import { css, styled } from 'styled-components';

export const BurgerButton = styled.button(
  ({ theme }) => css`
    position: relative;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1000;
    display: none;

    ${({ theme }) => theme.breakpoints.max('lg')} {
      display: flex;
    }
  `
);
export const BurgerLine = styled.span<{ $index: number; $isOpen: boolean }>(
  ({ $index, $isOpen, theme }) => css`
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${theme.colors.ADDITIONAL_COLOR};
    left: 0;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    ${$index === 0 && !$isOpen && 'top: 9px;'}
    ${$index === 1 && !$isOpen && 'top: 18px; opacity: 1;'}
    ${$index === 2 && !$isOpen && 'top: 27px;'}

    ${$isOpen &&
    $index === 0 &&
    `
      top: 18px;
      transform: rotate(45deg);
    `}

    ${$isOpen &&
    $index === 1 &&
    `
      top: 18px;
      opacity: 0;
    `}

    ${$isOpen &&
    $index === 2 &&
    `
      top: 18px;
      transform: rotate(-45deg);
    `}
  `
);
