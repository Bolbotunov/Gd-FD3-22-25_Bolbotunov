import styled from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';

export const InformationWrapper = styled('div')`
  ${FlexDiv};
  flex-direction: column;
  gap: 20px;
  flex: 1;
  padding: 30px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.max('md')} {
    padding: 10px;
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.max('sm')} {
    margin: 20px 0px;
  }
`;
