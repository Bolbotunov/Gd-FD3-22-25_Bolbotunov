import { FontsHeaderStyle } from '../styles/Fonts.styled';
import { MobileNavMenu } from './Navigation.styled';
import { textLinks } from './navigationConfig';

type NavigationProps = {
  isMobileMenuOpen?: boolean;
  linkClick?: () => void;
};
export default function Navigation({
  isMobileMenuOpen = false,
  linkClick,
}: NavigationProps) {
  const navLinks = textLinks.map(({ link, title }) => (
    <FontsHeaderStyle to={link} onClick={linkClick}>
      {title}
    </FontsHeaderStyle>
  ));
  return (
    <>
      {isMobileMenuOpen ? (
        <MobileNavMenu>{navLinks}</MobileNavMenu>
      ) : (
        <>{navLinks}</>
      )}
    </>
  );
}
