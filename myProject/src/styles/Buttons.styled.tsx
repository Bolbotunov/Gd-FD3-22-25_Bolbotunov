import { styled, css } from 'styled-components'
import { FontsFamily } from './Fonts.styled';

export const BtnCommonStyle = css`
  ${FontsFamily};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 320px;
  height: 50px;
  border-radius: 10px;
  background-color: transparent;
  border: 3px solid ${props => props.theme.colors.MAIN_COLOR};

  &:hover {
    color: ${props => props.theme.colors.BLACK_COLOR};
    background-color:${props => props.theme.colors.MAIN_COLOR};
    cursor: pointer;
    }

`;

export const BtnStyle = styled('button') `
  ${BtnCommonStyle};
  color:${props => props.theme.colors.MAIN_COLOR};
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 20px;
`

export const BtnAuth = styled('button') `
   ${FontsFamily};
   max-width: 100%;
   width: 70px;
   border-radius: 5px;
   text-align: center;
   background-color:${props => props.theme.colors.MAIN_COLOR};
   color:${props => props.theme.colors.BLACK_COLOR};

   &:hover {
    color: ${props => props.theme.colors.MAIN_COLOR};
    background-color:${props => props.theme.colors.ERROR_COLOR};
    cursor: alias;
    }
`

export const BtnDelete = styled('button') `
   ${FontsFamily};
   max-width: 100%;
   width: 150px;
   height: 5vh;
   border-radius: 5px;
   text-align: center;
   background-color:${props => props.theme.colors.ERROR_COLOR};
   color:${props => props.theme.colors.WHITE_COLOR};

   &:hover {
    color: ${props => props.theme.colors.ERROR_COLOR};
    background-color:${props => props.theme.colors.MAIN_COLOR};
    cursor: pointer;
    }
`


