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

export const AlbumAStyled = styled('a')`
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
    font-weight: 500;
    width: 80%;
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


export const TitlesStyled = styled('p')`
   color: ${props => props.theme.colors.SECONDARY_COLOR};
   font-weight: 400;
   font-size: 1.5rem;
   margin:0px;
`;

export const PicturesOfAlbumsStyled = styled('div')`
   width:80%;
   height:auto;
   border-top:5px solid ${props => props.theme.colors.ADDITIONAL_COLOR};
`;


export const AuthorLinkStyle = styled(Link)`
text-decoration: none;
   color: ${props => props.theme.colors.ADDITIONAL_COLOR};
   transition: .3s;
   margin: 20px;
    
&:hover {
   color: ${props => props.theme.colors.SECONDARY_COLOR};
}
`