import styled from 'styled-components'
import { commonStyles } from './MyContent.styled';



export const TitleContacts = styled('h2')`
    color: ${props => props.theme.colors.ADDITIONAL_COLOR};
    ${commonStyles}
    flex-direction: column;
    width:50%;
`;


export const Container = styled('div')`
    ${commonStyles}
    width: 50%;
`;


export const LinkWrapper = styled('div')`
    gap: 40px;
    width: 400px;
    margin: 0 auto;
    ${commonStyles}
`;
