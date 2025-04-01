import {
  FooterDivText,
  FooterLink,
  FooterStyle,
  FooterBlock,
  FooterLogo,
} from './Footer.styled';
import { useTheme } from 'styled-components';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export default function Footer() {
  const userName = useSelector((state: RootState) => state.authSlice.userName);
  const theme = useTheme();

  if (!userName) return null;

  return (
    <>
      <FooterBlock>
        <FooterStyle>
          <FooterLogo src={theme.logoSrc} alt='App Logo'></FooterLogo>
          <FooterDivText>
            made by{' '}
            <FooterLink href='https://github.com/Bolbotunov' target='_blank'>
              Bolbotunov
            </FooterLink>{' '}
            2025
          </FooterDivText>
        </FooterStyle>
      </FooterBlock>
    </>
  );
}
