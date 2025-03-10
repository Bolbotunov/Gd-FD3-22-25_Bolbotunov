import UserLoginForm from "../components/authorization/UserLoginForm"
import { BlurContainer } from "../styles/Common.styled"

export default function LoginPage() {
  return <>
    <BlurContainer style={{justifyContent:'center'}}>
      <UserLoginForm/>
    </BlurContainer>
  </>
}