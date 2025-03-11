import { deleteUser } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth } from '../../config/firebase';
import { clearUser } from '../../store/AuthSlice';
import { BtnAuth } from '../../styles/Buttons.styled';


export default function DeleteUserBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deleteUser() {
    const user = auth.currentUser;
    if (user) {
      user.delete()
        .then(() => {
          dispatch(clearUser());
          navigate('/register');
        })
        .catch((error) => {
          console.error('Error for deleting user', error);
        });
    } else {
      console.error('No have authorized user');
    }
  };

  return (
    <BtnAuth onClick={deleteUser}>
      Delete Account
    </BtnAuth>
  );
}
