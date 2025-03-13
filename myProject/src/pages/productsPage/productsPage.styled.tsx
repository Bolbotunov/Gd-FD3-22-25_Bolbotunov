import { WhiteBlock } from "../../styles/Common.styled";
import { FontsFamily } from "../../styles/Fonts.styled";
import styled from 'styled-components';
import { BtnCommonStyle } from "../../styles/Buttons.styled";


export const ProductsBlock = styled('div')`
  ${WhiteBlock};
  ${FontsFamily};
  width: 100%;
  font-weight: 600;
  font-size: calc(24px + 10%);
  color: ${props => props.theme.colors.WHITE_COLOR};
  background-color: ${props => props.theme.colors.WHITE_COLOR_40};
  justify-content: center;
  height: 100vh;
`;


export const ContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export const SearchInput = styled('input')`
  width: 100%;
  max-width: 750px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.colors.MAIN_COLOR};
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.MAIN_COLOR_30};
  color: ${props => props.theme.colors.WHITE_COLOR};

  ::placeholder {
    color: ${props => props.theme.colors.MAIN_COLOR};
  }
`;

export const TableHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.WHITE_COLOR};
  padding: 10px;
  font-weight: 500;
  font-size: 10px;
`;


export const HeaderItem = styled('div')`
  flex: 1;
  text-align: left;
  font-size: calc(2px + 1vw);
`;

export const ProductRow = styled('div')`
  background-color: ${props => props.theme.colors.BLACK_COLOR};
  display: flex;
  align-items: center;
  padding: 10px; 
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
`;

export const ProductRowWrapper = styled('div')`
  gap: 10px;
  display: flex;
  flex-direction:column;
`;

export const ProductColumn =  styled('div')`
  flex: 1;
  text-align: left;
  font-size: calc(8px + 1vw);
  padding:5px;
  min-width:50px;
`;

export const AddBtn = styled('button')`
  ${BtnCommonStyle}
  background-color:${props => props.theme.colors.MAIN_COLOR};
  color:${props => props.theme.colors.BLACK_COLOR};
  font-size: calc(4px + 1vw);
  font-weight: 600;
  margin: 20px auto;

  &:hover {
    color: ${props => props.theme.colors.MAIN_COLOR};
    background-color: transparent;
    cursor: pointer;
    }
`