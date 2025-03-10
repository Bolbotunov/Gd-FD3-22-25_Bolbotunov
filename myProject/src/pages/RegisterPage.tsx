import UserRegistrationForm from "../components/authorization/UserRegistrationForm"
import { BlurContainer } from "../styles/Common.styled"

export default function RegisterPage() {
  return <>
    <BlurContainer style={{justifyContent:'center'}}>
      <UserRegistrationForm/>
    </BlurContainer>
  </>
}