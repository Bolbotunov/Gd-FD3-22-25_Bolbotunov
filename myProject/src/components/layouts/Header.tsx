import { FontsHeaderStyle } from '../../styles/Fonts.styled';
import { HeaderStyle, NavStyle } from './Header.styled';
import UserInfo from '../authorization/UserInfo';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import ThemeToggleButton from '../buttons/ThemeToggleBtn';
import { useTheme } from 'styled-components';

export default function Header() {
  const userName = useSelector((state: RootState) => state.authSlice.userName);
  const theme = useTheme();

  if (!userName) return null;

  return (
    <>
      <HeaderStyle>
        <img
          src={theme.logoSrc}
          alt='App Logo'
          style={{
            height: '50px',
            width: 'auto',
            margin: '0 10px',
            position: 'relative',
            top: '5px',
          }}
        />
        <NavStyle>
          <FontsHeaderStyle to='/home'>Home</FontsHeaderStyle>
          <FontsHeaderStyle to='/profile'>Profile</FontsHeaderStyle>
          <FontsHeaderStyle to='/products'>Products</FontsHeaderStyle>
          <FontsHeaderStyle to='/diary'>Diary</FontsHeaderStyle>
          <FontsHeaderStyle to='/statistics'>Statistics</FontsHeaderStyle>
        </NavStyle>
        <UserInfo />
        <ThemeToggleButton />
      </HeaderStyle>
    </>
  );
}
