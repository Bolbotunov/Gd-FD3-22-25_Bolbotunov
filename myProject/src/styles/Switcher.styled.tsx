import { styled } from 'styled-components';

export const SwitchWrapper = styled('label')`
  position: relative;
  display: inline-block;
  width: calc(65px + 0.5vw);
  height: calc(26px + 0.5vw);

  ${({ theme }) => theme.breakpoints.max('lg')} {
    width: calc(45px + 0.5vw);
    height: calc(14px + 0.5vw);
  }
`;

export const SwitchInput = styled('input')`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.PRODUCT_ROW_COLOR};
  }

  &:checked + span:before {
    transform: translateX(40px);
  }

  ${({ theme }) => theme.breakpoints.max('lg')} {
    &:checked + span:before {
      transform: translateX(30px);
    }
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
    width: calc(24px + 0.5vw);
    height: calc(24px + 0.5vw);
    left: 0rem;
    bottom: 0.1rem;
    background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
    transition: 0.4s;
    border-radius: 50%;

    ${({ theme }) => theme.breakpoints.max('lg')} {
      width: calc(12px + 0.5vw);
      height: calc(12px + 0.5vw);
    }
  }
  ${({ theme }) => theme.breakpoints.max('md')} {
    transform: rotate(90deg);
  }
`;
