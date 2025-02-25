import { styled, css } from "styled-components";
import { Link } from "react-router";

export const commonStyles = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
`


export const MyContent = styled('div')`
    background-color: ${props => props.theme.colors.MAIN_COLOR};
    color: ${props => props.theme.colors.ADDITIONAL_COLOR};
    font-size:24px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


export const MyLinks = styled(Link)<{ activeColor?: string }>`
    color: ${props => props.activeColor || props.theme.colors.SECONDARY_COLOR};
    text-decoration:none;
    ${commonStyles}
    transition: .5s all;


    &:hover {
        color: ${props => props.theme.colors.HOVER_COLOR};
    }
`;


export const ContainerStyle = styled('div')`
    font-size: 32px;
    text-align: justify;
    background-color: ${props => props.theme.colors.SECONDARY_COLOR};
    border-radius:20px;
    padding:20px;
    margin-top:20px;
    height: auto;
`;


