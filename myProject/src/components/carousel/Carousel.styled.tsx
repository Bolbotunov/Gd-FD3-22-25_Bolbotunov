import { styled, css } from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';
import { FontsFamily } from '../../styles/Fonts.styled';
import { Link } from 'react-router';

export const CarouselContainer = styled('div')`
  ${FlexDiv};
  flex-direction: column;
  margin-bottom: 30px;
`;

export const FlexContainer = styled('div')`
  ${FlexDiv};
  gap: 20px;
`;

export const CarouselTitleStyle = styled('h2')`
  ${FontsFamily};
  font-weight: 500;
  padding: 5px;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const Buttons = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.3s all;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  }
`;

export const LeftButton = styled('div')`
  ${FlexDiv};
  ${Buttons};
  background-image: url('/leftArrow.png');
`;

export const RightButton = styled('div')`
  ${FlexDiv};
  ${Buttons};
  background-image: url('/rightArrow.png');
`;

export const DateSliderContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  overflow: hidden;
  position: relative;
`;

export const DateSliderInner = styled('div')<{
  offset: number;
  isAnimating: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(${({ offset }) => offset}%);
  transition: ${({ isAnimating }) =>
    isAnimating ? 'transform 0.3s ease' : 'none'};
  gap: 20px;
`;

export const DateStyle = styled('span')<{ isActive: boolean }>`
  font-size: ${({ isActive }) => (isActive ? '1.2rem' : '0.9rem')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.MAIN_COLOR : theme.colors.MAIN_COLOR_30};
  transition:
    font-size 0.3s ease,
    font-weight 0.3s ease,
    color 0.3s ease;
`;
