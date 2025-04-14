import { useEffect, useState } from 'react';
import { StyledMenu } from '../layouts/Header.styled';
import { NavStyle } from '../layouts/Header.styled';
import Navigation from '../Navigation';

export default function MenuBlock() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div
            style={{
              position: 'relative',
              width: '50px',
              height: '50px',
              border: '1px solid red',
              left: '0px',
            }}
          >
            <StyledMenu right width={'100%'}>
              <Navigation />
            </StyledMenu>
          </div>
        </>
      ) : (
        <NavStyle>
          <Navigation />
        </NavStyle>
      )}
    </>
  );
}
