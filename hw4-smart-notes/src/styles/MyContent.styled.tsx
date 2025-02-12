import { styled, css } from "styled-components"
import { CommonStylesFlex } from "./CommonStyles.styled"

export const MyContent = styled('div') `
   ${CommonStylesFlex};
   justify-content:flex-start;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    height:100%;
    padding: 20px;
`
