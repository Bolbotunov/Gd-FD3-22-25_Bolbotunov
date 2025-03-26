import styled from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';

type ChartsFillingProps = {
  fillpercent: string;
  fillcolor: string;
};

export const ChartLineBlock = styled('div')`
  ${FlexDiv}
  align-items:left;
`;

export const ChartsContainer = styled('div')`
  ${FlexDiv};
  flex-direction: column;
  align-items: initial;
  width: 100%;
  gap: 10px;
`;

export const ChartsFilling = styled('span')<ChartsFillingProps>`
  ${FlexDiv};
  width: ${({ fillpercent }) => fillpercent || '0%'};
  background-color: ${({ fillcolor }) => fillcolor};
  opacity: 0.7;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 10px;
  box-sizing: border-box;
  transition: width 0.5s ease;

  &:hover {
    opacity: 1;
  }
`;
export const ChartLineStyle = styled('div')`
  ${FlexDiv}
  padding: 20px;
  border-radius: 10px;
  border: 1px solid white;
  width: 100%;
  height: 35px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  &:hover {
    & > ${ChartsFilling} {
      opacity: 1;
    }
  }
`;

export const ExtraBlock = styled('div')`
  ${FlexDiv}
  color:${({ theme }) => theme.colors.SECONDARY_COLOR};
  padding: 20px;
  margin-left: 10px;
  height: 35px;
  overflow: hidden;
  position: relative;
  z-index: 20;
`;
