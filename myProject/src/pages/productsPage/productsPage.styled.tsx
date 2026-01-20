import { FlexDiv, WhiteBlock } from '../../styles/Common.styled';
import { FontsFamily } from '../../styles/Fonts.styled';
import styled from 'styled-components';

export const ProductsBlock = styled('div')`
  ${WhiteBlock};
  ${FontsFamily};
  width: 100%;
  font-weight: 600;
  font-size: calc(24px + 10%);
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};

  justify-content: center;
  height: 100vh;
`;

export const SearchInput = styled('input')`
  width: 100%;
  max-width: 750px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.MAIN_COLOR};
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR_30};
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};

  ::placeholder {
    color: ${({ theme }) => theme.colors.MAIN_COLOR};
  }
`;

export const TableHeader = styled('div')`
  order 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  padding: 10px;
  font-weight: 500;
  font-size: calc(2px + 1vw);
  ${({ theme }) => theme.breakpoints.max('md')} {
    font-size: 12px;
    padding: 10px 0px;
  }

`;

export const HeaderItem = styled('div')`
  flex: 1;
  text-align: left;
  margin-right: 4px;

  ${({ theme }) => theme.breakpoints.max('sm')} {
    text-align: center;
    padding: 4px;
  }
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
    isSelected ? theme.colors.OK_COLOR : theme.colors.SECONDARY_COLOR};
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.OK_COLOR : theme.colors.ADDITIONAL_COLOR};
  }
`;

export const ProductRowWrapper = styled('div')`
  gap: 10px;
  order: 4;
  display: flex;
  flex-direction: column;
`;

export const ProductColumn = styled('div')`
  flex: 1;
  text-align: left;
  font-size: calc(8px + 1vw);
  padding: 5px;
  min-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductColumnUser = styled('div')`
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
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
`;

export const NutrientLabel = styled('span')`
  font-size: 1.5rem;
`;

export const NutrientValue = styled('span')`
  font-size: 1.5rem;
`;

export const CreatedImage = styled('img')`
  width: 16px;
  height: 16px;
  object-fit: cover;
`;

export const FlexBtns = styled('div')`
  ${FlexDiv}
  order: 3;
  gap: 10px;
  ${({ theme }) => theme.breakpoints.max('md')} {
    flex-direction: column;
    order: 4;
  }
`;
