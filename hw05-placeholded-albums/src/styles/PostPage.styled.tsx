import styled from 'styled-components'
import { Link } from 'react-router'

export const AlbumLinkStyled = styled(Link)`
text-decoration: none;
   color: ${props => props.theme.colors.SECONDARY_COLOR};
   width: 100%;
   height:100px;
   border:2px solid white;
    flex-wrap:wrap;
    display:flex;
    transition: .3s;
    
&:hover {
   color: ${props => props.theme.colors.MAIN_COLOR};
   background-color:${props => props.theme.colors.SECONDARY_COLOR};
}
`

export const PostsUlStyled = styled('ul')`
    font-weight: 600;
    width: 60%;
    list-style:none;
    justify-content:space-around;
    flex-wrap:wrap;
    display:flex;
    padding:0px;
    color: ${props => props.theme.colors.ADDITIONAL_COLOR};
`;

export const PostsLiStyled = styled('li')`
   padding:17px;
   max-width:120px;
`;
