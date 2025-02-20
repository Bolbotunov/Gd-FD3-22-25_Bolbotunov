import { styled, css } from "styled-components"


export const TagsStyles = styled('div')`
    width: 160px;
    display:flex;
    flex-direction: row;
    margin-left:20px;
    align-items: center;
    justify-content:space-between;
    padding: 5px;
    margin-bottom:10px;
    box-sizing: border-box;
    border: 2px solid ${(props) => props.theme.colors.NOTES_COLOR};
    border-radius: 15px;
    color:${(props) => props.theme.colors.NOTES_COLOR};
    background-color:  ${(props) => props.theme.colors.HEADER_COLOR};
    transition: .3s all;
    font-size:12px;
    cursor:pointer;

`


export const TagsContainerStyles = styled('div')`
    display: flex;
    align-items:center;
    gap:10px;
    height:auto;
    flex-wrap:wrap;
   
`

export const TagsButtonStyles = styled('button')`
    display: flex;
    align-items:center;
    width:30px;
    height:30px;
    border-radius: 5px;

    border: 1px solid ${(props) => props.theme.colors.HEADER_COLOR};
    color:${(props) => props.theme.colors.HEADER_COLOR};
    background-color:  ${(props) => props.theme.colors.NOTES_COLOR};
    transition: .3s all;
    cursor: pointer;


    &:hover{
        border: 1px solid ${(props) => props.theme.colors.MAIN_COLOR};
        color:${(props) => props.theme.colors.HEADER_COLOR};
        background-color:  ${(props) => props.theme.colors.MAIN_COLOR};
    }

    &:active{
        background-color:  green;
        color:${(props) => props.theme.colors.NOTES_COLOR};
    }



`