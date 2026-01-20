import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { StyledMobileMenu } from '../layouts/Header.styled';
import { NavStyle } from '../layouts/Header.styled';
import Navigation from '../Navigation';
import { BurgerButton, BurgerLine } from './Burger.styled';

export default function MenuBlock() {
  const isMobile = useMediaQuery('(max-width: 760px)');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isMobile ? (
        <>
          <BurgerButton onClick={toggleMenu}>
            <BurgerLine $index={0} $isOpen={isOpen} />
            <BurgerLine $index={1} $isOpen={isOpen} />
            <BurgerLine $index={2} $isOpen={isOpen} />
          </BurgerButton>
          <StyledMobileMenu $isOpen={isOpen}>
            <Navigation isMobileMenuOpen={isOpen} />
          </StyledMobileMenu>
        </>
      ) : (
        <NavStyle>
          <Navigation isMobileMenuOpen={false} />
        </NavStyle>
      )}
    </>
  );
}
