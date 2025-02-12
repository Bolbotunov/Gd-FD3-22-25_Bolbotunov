import { styled, css } from "styled-components"
import { commonStylesFlex } from "./CommonStyles.styled"

export const MySite = styled('div') `
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #d6f6ff;
    height: 100vh;
`


export const MyHeader = styled('div') `
${commonStylesFlex}
    width: 100%;
    height: 100px;
    
    


`

export const HeaderContainer = styled('div') `
    ${commonStylesFlex}
    width:80%;
    margin: 0 auto;

`