import { styled, css } from 'styled-components'
import { Link } from 'react-router'

export const FlexDiv = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const ContainerDiv = styled('div')`
    ${FlexDiv}
    min-height: 100%;
    overflow: hidden;
    width: 100%;
    flex-direction: column;
`;

export const HeaderContainer = styled('div')`
    ${FlexDiv}
    margin: 0 auto;
    max-width: 1276px;
    padding: 0px 82px;
`;

export const HeaderNav = styled('nav')`
    ${FlexDiv}
    overflow: hidden;
    width: 100%;
`;

