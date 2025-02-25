import { styled } from "styled-components";


export const TitleTermsStyles = styled('div')`
    font-weight:700;
    color: ${props => props.theme.colors.SECONDARY_COLOR};
    padding: 25px 0px 0px 15px;
`;


export const TextTermsStyles = styled('div')`
    font-weight:200;
    color: ${props => props.theme.colors.ADDITIONAL_COLOR};
    padding-left:15px;
`;
