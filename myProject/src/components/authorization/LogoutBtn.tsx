import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { clearUser } from '../../store/AuthSlice';
import { BtnAuth } from '../../styles/Buttons.styled';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function userLogout() {
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return <BtnAuth onClick={userLogout}>log out</BtnAuth>;
}
