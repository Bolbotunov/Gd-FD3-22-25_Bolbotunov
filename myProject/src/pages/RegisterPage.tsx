import UserValidateForm from "../components/authorization/UserValidateForm"
import { BlurContainer } from "../styles/Common.styled"

export default function RegisterPage() {
  return <>
    <BlurContainer style={{justifyContent:'center'}}>
      <UserValidateForm/>
    </BlurContainer>
  </>
}