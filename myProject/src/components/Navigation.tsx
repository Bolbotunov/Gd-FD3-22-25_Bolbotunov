import { FontsHeaderStyle } from '../styles/Fonts.styled';
import { NavStyle } from './layouts/Header.styled';
import { slide as Menu } from 'react-burger-menu';

export default function Navigation() {
  return (
    <>
      <FontsHeaderStyle to='/home'>Home</FontsHeaderStyle>
      <FontsHeaderStyle to='/profile'>Profile</FontsHeaderStyle>
      <FontsHeaderStyle to='/products'>Products</FontsHeaderStyle>
      <FontsHeaderStyle to='/diary'>Diary</FontsHeaderStyle>
      <FontsHeaderStyle to='/statistics'>Statistics</FontsHeaderStyle>
    </>
  );
}
