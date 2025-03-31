import UserRegistrationForm from '../components/authorization/UserRegistrationForm';
import { BlurContainer } from '../styles/Common.styled';

export default function RegisterPage() {
  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <BlurContainer style={{ justifyContent: 'center' }}>
          <UserRegistrationForm />
        </BlurContainer>
      </div>
    </>
  );
}
