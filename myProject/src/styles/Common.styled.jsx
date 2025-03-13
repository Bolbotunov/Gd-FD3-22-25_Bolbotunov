import { styled, css } from 'styled-components'
import { Link } from 'react-router'

export const FlexDiv = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;



export const AppContainer = styled('div') `
  ${FlexDiv};
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0px 82px;
  overflow: hidden;
  margin: 10px;
`


export const InputStyle = styled('input') `
  text-align: left;
  width: 100%;
  max-width: 350px;
  height: 35px;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 10px;

  &::placeholder {
    color: ${props => props.theme.colors.MAIN_COLOR};
    opacity: 0.8;
  }
`
export const SelectStyle = styled('select') `
  text-align: left;
  max-width: 100%;
  width: 350px;
  height: 35px;
  border-radius: 10px;
  font-size: 1rem;
  padding: 5px;
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


export const SmallBlurContainer = styled(Link)`
${FlexDiv};
  margin: 0px;
  text-decoration: none;

  color: ${props => props.theme.colors.WHITE_COLOR};
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  height: 65px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transition: .5s all;

  &:hover {
    cursor: pointer;
    }
`;

export const WhiteBlock = css`
	${FlexDiv};
  width: 90%;
	margin: 0px;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;