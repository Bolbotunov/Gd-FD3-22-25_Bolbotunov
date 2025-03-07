import { styled, css } from 'styled-components'
import { Link } from 'react-router'

export const FontsFamily = css`
    font-family: 'Montserrat Alternates', sans-serif;
    text-decoration: none;
    transition: .4s ease;
`;


export const MainTitle = styled('h1')`
     ${FontsFamily};
     color: ${props => props.theme.colors.WHITE_COLOR};
`

export const MainSubTitle = styled('h4')`
     ${FontsFamily};
     color: ${props => props.theme.colors.MAIN_COLOR};
     font-weight: 400;
`

export const FontsHeaderStyle = styled(Link)`
    ${FontsFamily};
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.theme.colors.MAIN_COLOR};

    &:hover {
    color: ${props => props.theme.colors.WHITE_COLOR};
    }
`

export const ErrorText = styled('div')`
  color: ${props => props.theme.colors.ERROR_COLOR};
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;



export const CategoryTitleStyle = styled('h2')`
   ${FontsFamily};
    /* font-size: 1.2rem; */
    font-weight: 500;
    color: ${props => props.theme.colors.MAIN_COLOR};
`;


export const ChartLineTitle = styled('p')`
	 color: ${props => props.theme.colors.WHITE_COLOR};
     text-align:left;
`;

export const InputLabelStyle = styled('label')`
	 color: ${props => props.theme.colors.MAIN_COLOR};
     text-align: left;
`;


export const DailyKCalStyle = styled('p')`
    ${FontsFamily};
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.colors.MAIN_COLOR};

`