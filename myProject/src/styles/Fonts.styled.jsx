import { styled, css } from 'styled-components';
import { NavLink } from 'react-router';

export const FontsFamily = css`
  font-family: 'Montserrat Alternates', sans-serif;
  text-decoration: none;
  transition: 0.4s ease;
`;

export const MainTitle = styled('h1')`
  ${FontsFamily};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const MainSubTitle = styled('h4')`
  ${FontsFamily};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  font-weight: 400;
`;

export const InformationText = styled('h4')`
  ${FontsFamily};
  color: ${({ theme }) => theme.colors.ERROR_COLOR};
  font-weight: 500;
`;

export const InformationTextOk = styled('h4')`
  ${FontsFamily};
  color: ${({ theme }) => theme.colors.OK_COLOR};
  font-weight: 500;
`;

export const FontsHeaderStyle = styled(NavLink)`
  ${FontsFamily};
  font-size: calc(12px + 0.5vw);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  padding-right: 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  }
  &.active {
    color: ${({ theme }) => theme.colors.NAV_COLOR};
  }
`;

export const ErrorText = styled('div')`
  color: ${({ theme }) => theme.colors.ERROR_COLOR};
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;

export const UserInfoText = styled('p')`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const CategoryTitleStyle = styled('h2')`
  ${FontsFamily};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const ChartLineTitle = styled('p')`
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  text-align: left;
`;

export const InputLabelStyle = styled('label')`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  text-align: left;
`;

export const DailyKCalStyle = styled('p')`
  ${FontsFamily};
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;
