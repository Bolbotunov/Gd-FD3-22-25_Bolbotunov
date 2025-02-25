import { styled } from "styled-components";

export const MyFooter = styled('footer')`
    background-color: ${props => props.theme.colors.MAIN_COLOR};
    color: ${props => props.theme.colors.SECONDARY_COLOR};
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;