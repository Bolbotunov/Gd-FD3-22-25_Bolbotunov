import { styled, css } from 'styled-components';
import { Link } from 'react-router';

export const FlexDiv = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppContainer = styled('div')`
  ${FlexDiv};
  flex-direction: column;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  padding: 0px 20px;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.max('lg')} {
    max-width: 1240px;
    padding: 0px 20px;
  }

  ${({ theme }) => theme.breakpoints.max('md')} {
    max-width: 820px;
    padding: 0px 20px;
  }
`;

export const InputStyle = styled('input')`
  text-align: left;
  width: 100%;
  max-width: 350px;
  height: 35px;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.MAIN_COLOR};
    opacity: 0.8;
  }
`;
export const SelectStyle = styled('select')`
  text-align: left;
  max-width: 100%;
  width: 350px;
  height: 35px;
  border-radius: 10px;
  font-size: 1rem;
  padding: 5px;
`;

export const BlurContainer = styled('div')`
  flex: 1;
  width: 100%;
  margin: 0px;
  ${FlexDiv};
  justify-content: space-evenly;
  flex-direction: column;
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.SECONDARY_COLOR_40};
  padding: 30px 20px;
  height: auto;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.MAIN_COLOR};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;

export const SmallBlurContainer = styled(Link)`
  ${FlexDiv};
  margin: 0px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.SECONDARY_COLOR_40};
  padding: 10px;
  height: 65px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transition: 0.5s all;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.breakpoints.max('lg')} {
    padding: 5px;
    gap: 1px;
    flex-direction: row;
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

export const Flex = styled('div')`
  ${FlexDiv};
  align-items: center;
`;

export const ContentContainer = styled('div')`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
