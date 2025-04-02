import { Spinner } from '../components/Spinner/Spinner.styles';
import { BtnLink } from '../styles/Buttons.styled';
import { BlurContainer, ContentContainer } from '../styles/Common.styled';
import { MainSubTitle, NotFoundText } from '../styles/Fonts.styled';

export default function NotFoundPage() {
  return (
    <>
      <BlurContainer>
        <ContentContainer style={{ gap: '20px', alignItems: 'center' }}>
          <NotFoundText>
            Error 4
            <Spinner
              style={{
                display: 'inline-block',
                position: 'relative',
                top: '7px',
              }}
            />
            4: Page Not Found
          </NotFoundText>
          <MainSubTitle>
            Oops! The page you're looking for doesn't exist.
          </MainSubTitle>
          <BtnLink to='/'>Go Back Home</BtnLink>
        </ContentContainer>
      </BlurContainer>
    </>
  );
}
