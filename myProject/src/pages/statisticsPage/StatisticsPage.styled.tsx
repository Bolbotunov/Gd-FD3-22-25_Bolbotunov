import { styled, css } from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';
import { FontsFamily } from '../../styles/Fonts.styled';
import Calendar from 'react-calendar';

export const ProductRowStat = styled('div')`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.ADDITIONAL_COLOR};
`;

export const MessageStyle = styled('h3')`
  ${FontsFamily};
  margin: 20px 0px;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    button {
      color: #333;
      font-weight: bold;
      background: none;
      border: none;
      cursor: pointer;

      &:hover {
        color: #007bff;
        text-decoration: underline;
        background-color: initial;
      }
    }
  }

  .react-calendar__month-view__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    .react-calendar__tile--now {
      background-color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
    }
    .react-calendar__tile {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
        color: ${({ theme }) => theme.colors.PRODUCT_ROW_COLOR};
      }

      &--active {
        background-color: #007bff;
        color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
        font-weight: bold;
      }
    }
  }

  .react-calendar__tile--disabled {
    color: ${({ theme }) => theme.colors.DISABLED_COLOR_LIGHT};
    cursor: not-allowed;
  }
`;

export const StatisticsBlock = styled('div')`
  width: 100%;
  max-width: 400px;
`;

export const StatisticsTitles = styled('div')`
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  gap: 20px;
  align-items: left;
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  padding: 20px;
  font-weight: 400;
  font-size: calc(10px + 1vw);
`;
