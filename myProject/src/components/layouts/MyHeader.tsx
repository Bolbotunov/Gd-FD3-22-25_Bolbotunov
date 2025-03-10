import { FontsHeaderStyle } from "../../styles/Fonts.styled";
import { NavStyle } from './Header.styled';
import UserInfo from "../authorization/UserInfo";

export default function MyHeader() {
  return (
    <>
      <NavStyle>
        <UserInfo/>
        <FontsHeaderStyle to='/home'>Home</FontsHeaderStyle>
        <FontsHeaderStyle to='/profile'>Profile</FontsHeaderStyle>
        <FontsHeaderStyle to='/products'>Products</FontsHeaderStyle>
        <FontsHeaderStyle to='/diary'>Diary</FontsHeaderStyle>
        <FontsHeaderStyle to='/statistics'>Statistics</FontsHeaderStyle>
        <FontsHeaderStyle to='/settings'>Settings</FontsHeaderStyle>
      </NavStyle>
    </>
  );
}



