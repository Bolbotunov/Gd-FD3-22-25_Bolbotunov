import { styled, css } from "styled-components"

export const CommonStylesFlex = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const CommonStylesFlexDiv = styled('div')`
    ${CommonStylesFlex};
    width: 100%;
    padding: 20px;
`

export const NotesListStyles = styled('div')`
    ${CommonStylesFlex};
    width: 95%;
    align-items: flex-start;
    padding: 15px;
    margin-bottom:20px;
    box-sizing: border-box;
    flex-direction:column;
    border: 2px solid ${(props) => props.theme.colors.HEADER_COLOR};
    border-radius: 15px;
    background-color:  ${(props) => props.theme.colors.NOTES_COLOR};
`

export const MyWrapper = styled('div') `
     ${CommonStylesFlex}
    background-color: ${(props) => props.theme.colors.MAIN_COLOR};
    height: 100vh;
`

export const MySection = styled('div') `
    ${CommonStylesFlex}
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    width:50%;
    justify-content:flex-start;
    margin: 0 auto;
    height:100vh;
    border:1px solid ${(props) => props.theme.colors.HEADER_COLOR};
`


export const CommonStylesTitlesHeader = styled('div')`
    font-size: calc(12px + 1.5vw);
    font-weight: 600;
    color: ${(props) => props.theme.colors.NOTES_COLOR};
`

export const CommonStylesTitles = styled('div')`
    font-size: calc(12px + 1vw);
    font-weight: 600;
    color: ${(props) => props.theme.colors.HEADER_COLOR};
`

export const CommonStylesText = styled('p')`
    font-size: 22px;
    background-color:#e9ebf0;
`

export const CommonStylesInput = styled('input')`
    width: 150px;
    height: 25px;
    border: 1px solid blue;
`


export const CommonStylesSelect = styled('select')`
  width: 200px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 16px;
`;

export const CommonStylesOption = styled('option')`
  font-size: 16px;
`;


