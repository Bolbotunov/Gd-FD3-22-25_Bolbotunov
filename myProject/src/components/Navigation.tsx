import { FontsHeaderStyle } from '../styles/Fonts.styled';
import { MobileNavMenu } from './Navigation.styled';

type NavigationProps = {
  isMobileMenuOpen?: boolean;
};
export default function Navigation({
  isMobileMenuOpen = false,
}: NavigationProps) {
  return (
    <>
      {isMobileMenuOpen ? (
        <MobileNavMenu>
          <FontsHeaderStyle to='/home'>Home</FontsHeaderStyle>
          <FontsHeaderStyle to='/profile'>Profile</FontsHeaderStyle>
          <FontsHeaderStyle to='/products'>Products</FontsHeaderStyle>
          <FontsHeaderStyle to='/diary'>Diary</FontsHeaderStyle>
          <FontsHeaderStyle to='/statistics'>Statistics</FontsHeaderStyle>
        </MobileNavMenu>
      ) : (
        <>
          <FontsHeaderStyle to='/home'>Home</FontsHeaderStyle>
          <FontsHeaderStyle to='/profile'>Profile</FontsHeaderStyle>
          <FontsHeaderStyle to='/products'>Products</FontsHeaderStyle>
          <FontsHeaderStyle to='/diary'>Diary</FontsHeaderStyle>
          <FontsHeaderStyle to='/statistics'>Statistics</FontsHeaderStyle>
        </>
      )}
    </>
  );
}
