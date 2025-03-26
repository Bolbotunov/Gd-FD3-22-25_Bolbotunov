import { FontsHeaderStyle } from '../../styles/Fonts.styled';
import { NavStyle } from './Header.styled';
import UserInfo from '../authorization/UserInfo';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import ThemeToggleButton from '../buttons/ThemeToggleBtn';

export default function Header() {
  const userName = useSelector((state: RootState) => state.authSlice.userName);

  if (!userName) return null;

  return (
    <>
      <NavStyle>
        <UserInfo />
        <FontsHeaderStyle to='/home'>Home</FontsHeaderStyle>
        <FontsHeaderStyle to='/profile'>Profile</FontsHeaderStyle>
        <FontsHeaderStyle to='/products'>Products</FontsHeaderStyle>
        <FontsHeaderStyle to='/diary'>Diary</FontsHeaderStyle>
        <FontsHeaderStyle to='/statistics'>Statistics</FontsHeaderStyle>
        <FontsHeaderStyle to='/settings'>Settings</FontsHeaderStyle>
        <ThemeToggleButton />
      </NavStyle>
    </>
  );
}
