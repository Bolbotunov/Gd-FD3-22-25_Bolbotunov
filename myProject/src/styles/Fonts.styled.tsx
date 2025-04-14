import { styled, css } from 'styled-components';
import { NavLink } from 'react-router';

export const FontsFamily = css`
  font-family: 'Montserrat Alternates', sans-serif;
  text-decoration: none;
  transition: 0.4s ease;
`;

export const MainTitle = styled('h1')`
  ${FontsFamily};
  font-size: calc(21px + 0.5vw);
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const NotFoundText = styled('h1')`
  ${FontsFamily};
  display: inline-block;
  font-size: calc(32px + 1vw);
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const MainSubTitle = styled('h4')`
  ${FontsFamily};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  font-size: calc(12px + 0.5vw);
  font-weight: 400;
`;

export const InformationText = styled('h4')`
  ${FontsFamily};
  color: ${({ theme }) => theme.colors.ERROR_COLOR};
  font-weight: 400;
  font-size: calc(6px + 0.5vw);
  padding: 10px;
`;

export const InformationTextOk = styled('h4')`
  ${FontsFamily};
  color: ${({ theme }) => theme.colors.OK_COLOR};
  font-weight: 500;
  padding: 10px;
`;

export const FontsHeaderStyle = styled(NavLink)`
  ${FontsFamily};
  font-size: calc(8px + 0.5vw);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  padding-right: 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  }
  &.active {
    color: ${({ theme }) => theme.colors.NAV_COLOR};
  }

  ${({ theme }) => theme.breakpoints.max('sm')} {
    font-size: calc(30px + 1vw);
    padding-top: 20px;
  }
`;

export const ErrorText = styled('div')`
  color: ${({ theme }) => theme.colors.ERROR_COLOR};
  font-size: calc(6px + 0.5vw);
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const UserInfoText = styled('p')`
  font-size: calc(8px + 0.5vw);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};

  ${({ theme }) => theme.breakpoints.max('lg')} {
    width: 50%;
  }
`;

export const CategoryTitleStyle = styled('h2')`
  ${FontsFamily};
  font-weight: 500;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.ADDITIONAL_COLOR};
  font-size: calc(16px + 0.5vw);
`;

export const ChartLineTitle = styled('p')`
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  font-size: calc(10px + 0.5vw);
  text-align: left;
`;

export const InputLabelStyle = styled('label')`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  text-align: left;
  font-size: calc(6px + 0.5vw);
`;

export const DailyKCalStyle = styled('p')`
  ${FontsFamily};
  font-size: calc(16px + 0.5vw);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ADDITIONAL_COLOR};
`;
