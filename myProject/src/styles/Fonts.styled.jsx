import { styled, css } from 'styled-components'
import { Link } from 'react-router'

export const FontsFamily = css`
    font-family: 'Montserrat Alternates', sans-serif;
    text-decoration: none;
    transition: .4s ease;
`;


export const FontsHeaderStyle = styled(Link)`
    ${FontsFamily};
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.theme.colors.MAIN_COLOR};

    &:hover {
    color: ${props => props.theme.colors.WHITE_COLOR};
    }
`


export const CategoryTitle = styled('h2')`
   ${FontsFamily};
    /* font-size: 1.2rem; */
    font-weight: 500;
    color: ${props => props.theme.colors.MAIN_COLOR};
`;