import styled from 'styled-components'
import { Link } from 'react-router'

export const PostPageLinksStyled = styled(Link)`
text-decoration: none;
   color: ${props => props.theme.colors.SECONDARY_COLOR};
   width: 100%;
    flex-wrap:wrap;
    display:flex;
&:hover {
   color: ${props => props.theme.colors.HOVER_COLOR};
}
`

export const PostsUlStyled = styled('ul')`
    font-weight: 600;
    width: 60%;
    list-style:none;
    justify-content:space-around;
    flex-wrap:wrap;
    display:flex;
    color: ${props => props.theme.colors.ADDITIONAL_COLOR};
`;

export const PostsLiStyled = styled('li')`
   padding:17px;
`;


export const  PostPageWrongLinksStyled = styled(Link)`
   text-decoration: none;
   padding:17px;
   color: red;
   &:hover {
      color: ${props => props.theme.colors.HOVER_COLOR};
}
`;
