import { deleteUser } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth } from '../../config/firebase';
import { clearUser } from '../../store/AuthSlice';
import { BtnDelete } from '../../styles/Buttons.styled';


export default function DeleteUserBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deleteUser() {
    const agree = prompt('delete user?')
    if (agree) {
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
    }
   
  };

  return (
    <BtnDelete onClick={deleteUser}>
      Delete Account
    </BtnDelete>
  );
}
