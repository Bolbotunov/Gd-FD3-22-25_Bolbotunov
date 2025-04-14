import { HeaderLogo, HeaderStyle } from './Header.styled';
import UserInfo from '../../authorization/UserInfo';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import ThemeToggleButton from '../buttons/ThemeToggleBtn';
import { useTheme } from 'styled-components';
import MenuBlock from '../burger/MenuBlock';

export default function Header() {
  const userName = useSelector((state: RootState) => state.authSlice.userName);
  const theme = useTheme();

  if (!userName) return null;

  return (
    <>
      <HeaderStyle>
        <HeaderLogo src={theme.logoSrc} alt='App Logo' />
        <MenuBlock />
        <UserInfo />
        <ThemeToggleButton />
      </HeaderStyle>
    </>
  );
}
