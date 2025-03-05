import { styled, css } from 'styled-components'
import { FontsFamily } from './Fonts.styled';
import { FlexDiv } from './Common.styled';

export const BtnCommonStyle = css`
  ${FontsFamily};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 350px;
  height: 60px;
  border-radius: 10px;
  border: 3px solid ${props => props.theme.colors.MAIN_COLOR};

  &:hover {
    color: ${props => props.theme.colors.WHITE_COLOR};
    border: 3px solid ${props => props.theme.colors.WHITE_COLOR};
    cursor: pointer;
    }

`;

export const BtnStyle = styled('div') `
  ${BtnCommonStyle};
  color:${props => props.theme.colors.MAIN_COLOR};
  font-size: 1.2rem;
  font-weight: 500;
`
