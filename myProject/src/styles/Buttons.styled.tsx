import { Link } from 'react-router';
import { styled, css } from 'styled-components';
import { FontsFamily } from './Fonts.styled';
import { FlexDiv } from './Common.styled';

export const BtnCommonStyle = css`
  ${FontsFamily};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 250px;
  height: 5vh;
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.MAIN_COLOR};

  &:hover {
    color: ${({ theme }) => theme.colors.PRODUCT_ROW_COLOR};
    background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
    cursor: pointer;
  }
`;

export const BtnDictionary = css`
  ${FontsFamily};
  max-width: 100%;
  width: 175px;
  height: 5vh;
  border-radius: 5px;
  text-align: center;
  font-size: calc(4px + 0.6vw);
  margin: 20px auto;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnStyle = styled('button')`
  ${BtnCommonStyle};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 20px;
  margin: 20px;
`;

export const BtnAuth = styled('button')`
  ${FontsFamily};
  max-width: 100%;
  width: 70px;
  border-radius: 5px;
  text-align: center;
  font-size: calc(6px + 0.5vw);
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: ${({ theme }) => theme.colors.PRODUCT_ROW_COLOR};

  &:hover {
    color: ${({ theme }) => theme.colors.MAIN_COLOR};
    background-color: ${({ theme }) => theme.colors.ERROR_COLOR};
    cursor: alias;
  }

  ${({ theme }) => theme.breakpoints.max('lg')} {
    width: 60px;
  }
`;

export const BtnDelete = styled('button')`
  ${BtnDictionary};
  background-color: ${({ theme, disabled }) =>
    disabled ? 'transparent' : theme.colors.ERROR_COLOR};
  color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.DISABLED_COLOR_LIGHT
      : theme.colors.SECONDARY_COLOR};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    ${({ disabled, theme }) =>
      !disabled &&
      css`
        color: ${theme.colors.SECONDARY_COLOR};
        background-color: ${theme.colors.ERROR_COLOR_HOVER};
        border: 2px solid ${theme.colors.ERROR_COLOR};
      `}
  }
`;

export const AddBtn = styled('button')`
  ${BtnDictionary}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.DICT_BTN_COLOR};
  border: 2px solid ${({ theme }) => theme.colors.DICT_BTN_COLOR};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.PRODUCT_ROW_COLOR};
    background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
    border: initial;
    cursor: pointer;
  }
`;

export const LinkBtn = styled('button')<{ disabled?: boolean }>`
  ${BtnDictionary};
  ${FlexDiv};
  background-color: transparent;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.DISABLED_COLOR_LIGHT : theme.colors.DICT_BTN_COLOR};
  border: 2px solid
    ${({ theme, disabled }) =>
      disabled
        ? theme.colors.DISABLED_COLOR_DARK
        : theme.colors.DICT_BTN_COLOR};
  font-weight: 600;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    border: initial;
    ${({ disabled, theme }) =>
      !disabled &&
      css`
        color: ${theme.colors.PRODUCT_ROW_COLOR};
        background-color: ${theme.colors.MAIN_COLOR};
      `}
  }
`;
