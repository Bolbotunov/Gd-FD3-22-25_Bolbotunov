import { styled } from "styled-components";
import { Link } from "react-router";

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


export const MyHeader = styled('nav')`
    background-color: ${props => props.theme.colors.MAIN_COLOR};
    width: 80%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid  ${props => props.theme.colors.SECONDARY_COLOR};
`;


export const MyHeaderWrapper = styled('div')`
background-color: ${props => props.theme.colors.MAIN_COLOR};
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
