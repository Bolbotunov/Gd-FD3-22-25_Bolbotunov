import { styled, css } from "styled-components"

export const CommonButtonStyles = css`
background-color: ${(props) => props.theme.colors.HEADER_COLOR};
color: white;
padding: 10px 20px;
border: 2px solid ${(props) => props.theme.colors.NOTES_COLOR};
border-radius: 4px;
cursor: pointer;
margin: 20px 10px;
transition: .3s all;
font-size: 1rem;

&:hover {
    background-color: #259e37;
}

&:active {
    background-color: ${(props) => props.theme.colors.NOTES_COLOR};
    color: ${(props) => props.theme.colors.HEADER_COLOR};
    border: 2px solid ${(props) => props.theme.colors.HEADER_COLOR};
}
`;


export const CommonBasicButtonStyles = styled('button')`
${CommonButtonStyles}
`;

export const CommonDeleteButtonStyles = styled('button')`
${CommonButtonStyles}
&:hover {
    background-color: #901717;
}
&:active {
    background-color: #ff0000;
    color: ${(props) => props.theme.colors.NOTES_COLOR};
    border: 2px solid ${(props) => props.theme.colors.HEADER_COLOR};
}
`;

export const CommonButtonGroup = styled('div')`
    display: flex;
    justify-content: space-around;
`;