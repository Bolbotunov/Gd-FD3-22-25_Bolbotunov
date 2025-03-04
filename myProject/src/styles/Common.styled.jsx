import { styled, css } from 'styled-components'


export const FlexDiv = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AppContainer = styled('div') `
    ${FlexDiv};
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0px 82px;
    overflow: hidden;
`

export const BlurContainer = styled('div')`
  flex: 1;
  margin: 0px;
  ${FlexDiv};
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  height: 100vh;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.MAIN_COLOR};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px); 
`;


