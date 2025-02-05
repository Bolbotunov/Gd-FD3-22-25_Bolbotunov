import { Outlet, Link } from 'react-router';
import { MyLinks } from '../styles/MyContent.styled';
import { LinkWrapper } from '../styles/MyContent.styled';
import { TitleContacts } from '../styles/MyContent.styled';
import { Container } from '../styles/MyContent.styled';
import { siteColors } from '../styles/siteColors';
import { useState } from 'react';

export default function ContactPage() {
  const [colorLink, setColorLink] = useState(siteColors.colors.SECONDARY_COLOR)

  const handleClick = (link: string) => {
    setColorLink(link)
  }

  return (
    <>
        <TitleContacts>
          <p>Hi everyone!</p>
          <h2>Our Contacts:</h2>
        </TitleContacts>
        <Container>
        <div>
      <div>

        <LinkWrapper>
          <MyLinks to='image' activeColor = {colorLink === 'image' ? siteColors.colors.ADDITIONAL_COLOR : siteColors.colors.SECONDARY_COLOR } onClick={() => handleClick('image')}>IMAGE</MyLinks>
          <MyLinks to='text' activeColor = {colorLink === 'text' ? siteColors.colors.ADDITIONAL_COLOR : siteColors.colors.SECONDARY_COLOR } onClick={() => handleClick('text')}>TEXT</MyLinks>
        </LinkWrapper>
      </div>
        <div>
          <Outlet />
        </div>
      </div>
    </Container>
    </>
  );
}
