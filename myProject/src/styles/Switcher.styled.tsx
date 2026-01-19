import { styled, css } from 'styled-components';

export const SwitchWrapper = styled('label')`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 26px;

  ${({ theme }) => theme.breakpoints.max('lg')} {
    width: 60px;
    height: 20px;
  }

  ${({ theme }) => theme.breakpoints.max('md')} {
    width: 72px;
    height: 24px;
  }

  ${({ theme }) => theme.breakpoints.max('sm')} {
    width: 62px;
    height: 24px;
  }
`;

export const SwitchInput = styled('input')`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.PRODUCT_ROW_COLOR};
  }

  &:checked + span:before {
    transform: translateX(40px);
  }
`;

export const Slider = styled('span')`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 35px;

  &:before {
    position: absolute;
    content: '';
    top: 1px;
    width: 24px;
    height: 24px;
    left: 0rem;
    bottom: 0.1rem;
    background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
    transition: 0.4s;
    border-radius: 50%;

    ${({ theme }) => theme.breakpoints.max('lg')} {
      width: 18px;
      height: 18px;
    }

    ${({ theme }) => theme.breakpoints.max('md')} {
      width: 22px;
      height: 22px;
    }
  }
  ${({ theme }) => theme.breakpoints.max('md')} {
    transform: rotate(90deg);
  }
`;
