import UserLoginForm from "../components/authorization/UserLoginForm"
import { BlurContainer } from "../styles/Common.styled"
import { RootState } from '../store/store';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux'
import { useEffect } from "react";

export default function LoginPage() {

  const userName = useSelector((state: RootState) => state.authSlice.userName);
  const navigate = useNavigate();

useEffect(() => {
  if (userName) {
    navigate('/home')
  }
}, [userName, navigate])

  return <>
    <BlurContainer style={{justifyContent:'center'}}>
      <UserLoginForm/>
    </BlurContainer>
  </>
}