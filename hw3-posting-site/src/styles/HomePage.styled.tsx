import styled from 'styled-components'
import { Link } from 'react-router'


export const MyLink = styled(Link)`
    color: ${props => props.theme.colors.SECONDARY_COLOR};
    text-decoration: none;
    font-size: 28px;
    font-weight:500;
    transition: .5s all;

    &:hover {
        color: ${props => props.theme.colors.HOVER_COLOR};
    }
`;

