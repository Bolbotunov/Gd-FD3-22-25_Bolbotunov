import { WhiteBlock } from "../../styles/Common.styled";
import { FontsFamily } from "../../styles/Fonts.styled";
import styled from 'styled-components';


export const ProductsBlock = styled('div')`
  ${WhiteBlock};
  ${FontsFamily};
  width: 100%;
  font-weight: 600;
  font-size: calc(24px + 10%);
  color: ${({theme}) => theme.colors.WHITE_COLOR};
  background-color: ${({theme}) => theme.colors.WHITE_COLOR_40};
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
  border: 1px solid ${({theme}) => theme.colors.MAIN_COLOR};
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: ${({theme}) => theme.colors.MAIN_COLOR_30};
  color: ${({theme}) => theme.colors.WHITE_COLOR};

  ::placeholder {
    color: ${({theme}) => theme.colors.MAIN_COLOR};
  }
`;

export const TableHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({theme}) => theme.colors.WHITE_COLOR};
  padding: 10px;
  font-weight: 500;
  font-size: 10px;
  font-size: calc(2px + 1vw);
`;


export const HeaderItem = styled('div')`
  flex: 1;
  text-align: left;
`;

export const HeaderItemUser = styled('div')`
  flex: 1;
  text-align: left;
  padding: 5px;
`;



export const ProductRow = styled('div')<{ isSelected: boolean | null }>`
    display: flex;
    align-items: center;
    padding: 10px;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.OK_COLOR : theme.colors.MAIN_COLOR};
    cursor: pointer;
    transition: .3s all;

    &:hover {
      background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.OK_COLOR : theme.colors.WHITE_COLOR};
    }
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
  padding: 5px;
  min-width:50px;
`;


export const ProductColumnUser =  styled('div')`
  flex: 1;
  text-align: left;
  min-width: 20px;
  padding: 5px;
`;




export const NutrientRow = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  color: ${({theme}) => theme.colors.WHITE_COLOR};
`;

export const NutrientLabel = styled('span')`
  font-size: 1rem;
`;

export const NutrientValue = styled('span')`
  font-size: 1rem;
`;
