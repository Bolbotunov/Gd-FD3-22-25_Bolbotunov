import {
  FooterDivText,
  FooterLink,
  FooterStyle,
  FooterBlock,
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
          <img
            src={theme.logoSrc}
            alt='App Logo'
            style={{
              height: '25px',
              width: 'auto',
              margin: '0 2px',
              position: 'relative',
              top: '5px',
            }}
          ></img>
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
