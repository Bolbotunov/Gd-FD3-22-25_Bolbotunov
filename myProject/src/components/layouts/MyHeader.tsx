import { FontsHeaderStyle } from "../../styles/Fonts.styled";
import { NavStyle } from './Header.styled';

export default function MyHeader() {
  return (
    <>
      <NavStyle>
        <FontsHeaderStyle to='/'>Home</FontsHeaderStyle>
        <FontsHeaderStyle to='/profile'>Profile</FontsHeaderStyle>
        <FontsHeaderStyle to='/products'>Products</FontsHeaderStyle>
        <FontsHeaderStyle to='/diary'>Diary</FontsHeaderStyle>
        <FontsHeaderStyle to='/statistics'>Statistics</FontsHeaderStyle>
        <FontsHeaderStyle to='/settings'>Settings</FontsHeaderStyle>
      </NavStyle>
    </>
  );
}



