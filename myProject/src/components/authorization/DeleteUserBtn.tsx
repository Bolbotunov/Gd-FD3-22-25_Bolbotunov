import { deleteUser } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase/firebase';
import { clearUser } from '../../store/AuthSlice';
import { BtnDelete } from '../../styles/Buttons.styled';
import { showConfirmToast } from '../../utils/showConfirmToast';

export default function DeleteUserBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await user.delete();
        dispatch(clearUser());
        navigate('/register');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    } else {
      console.error('No authorized user found');
    }
  };

  const handleDeleteClick = () => {
    showConfirmToast(() => {
      handleDeleteUser();
    });
  };

  return <BtnDelete onClick={handleDeleteClick}>Delete Account</BtnDelete>;
}
