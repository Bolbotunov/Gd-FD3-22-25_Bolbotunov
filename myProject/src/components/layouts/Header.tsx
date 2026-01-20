import { HeaderLogo, HeaderStyle } from './Header.styled';
import UserInfo from '../../authorization/UserInfo';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import ThemeToggleButton from '../buttons/ThemeToggleBtn';
import { useTheme } from 'styled-components';
import MenuBlock from '../burger/MenuBlock';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function Header() {
  const userName = useSelector((state: RootState) => state.authSlice.userName);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 760px)');

  if (!userName) return null;
  return (
    <HeaderStyle>
      <HeaderLogo src={theme.logoSrc} alt='App Logo' />
      {isMobile ? (
        <>
          <UserInfo />
          <ThemeToggleButton />
          <MenuBlock />
        </>
      ) : (
        <>
          <MenuBlock />
          <UserInfo />
          <ThemeToggleButton />
        </>
      )}
    </HeaderStyle>
  );
}
