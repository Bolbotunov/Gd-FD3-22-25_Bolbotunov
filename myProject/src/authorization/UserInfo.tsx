import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import LogoutButton from './LogoutBtn';
import { SmallBlurContainer } from '../styles/Common.styled';
import { UserInfoText } from '../styles/Fonts.styled';

export default function UserInfo() {
  const currentUser = useSelector((state: RootState) => state.authSlice);

  return (
    <div>
      {currentUser ? (
        <SmallBlurContainer to={'/profile'}>
          <UserInfoText>to my profile!</UserInfoText>
          <LogoutButton />
        </SmallBlurContainer>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}
