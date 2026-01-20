import styled from 'styled-components';
import { FontsHeaderStyle } from '../styles/Fonts.styled';

export const MobileNavMenu = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 0;
  width: 100%;

  ${FontsHeaderStyle} {
    font-size: 1.4rem;
    padding: 16px 20px;
    border-radius: 12px;
    transition: all 0.3s ease;
  }
`;
