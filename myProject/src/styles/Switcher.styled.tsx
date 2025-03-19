import { styled, css } from 'styled-components'

export const SwitchWrapper = styled('label')`
position: relative;
display: inline-block;
width: 3.8rem;
height: 2rem;
`;

export const SwitchInput = styled('input')`
opacity: 0;
width: 0;
height: 0;

&:checked + span {
  background-color: ${({ theme }) => theme.colors.BLACK_COLOR};
}

&:checked + span:before {
  transform: translateX(30px);
}
`;

export const Slider = styled.span`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
transition: 0.4s;
border-radius: 34px;

&:before {
  position: absolute;
  content: '';
  height: 1.8rem;
  width: 1.8rem;
  left: 0.2rem;
  bottom: 0.1rem;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  transition: 0.4s;
  border-radius: 50%;
}
`;
