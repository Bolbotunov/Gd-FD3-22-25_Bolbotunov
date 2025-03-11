import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import LogoutButton from './LogoutBtn';
import DeleteUserBtn from './DeleteUserBtn';
import { SmallBlurContainer } from '../../styles/Common.styled';
import { UserInfoText } from '../../styles/Fonts.styled';

export default function UserInfo() {
  const currentUser = useSelector((state: RootState) => state.authSlice);

  return (
    <div>
      {currentUser ? (
        <SmallBlurContainer>
           <LogoutButton/>
          <DeleteUserBtn/>
          <UserInfoText>Welcome, {currentUser.userName}!</UserInfoText>
          <UserInfoText >{currentUser.userEmail}</UserInfoText>
         
        </SmallBlurContainer>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}