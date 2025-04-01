import styled from 'styled-components';
import { FlexDiv } from '../../styles/Common.styled';

export const HomePageFlex = styled('div')`
  ${FlexDiv};
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.breakpoints.max('sm')} {
    flex-direction: column;

    & > *:first-child {
      order: 2;
    }

    & > *:last-child {
      order: 1;
    }
  }
`;
