import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';



export default function UserInfo() {
  const currentUser = useSelector((state: RootState) => state.authSlice);

  return (
    <div>
      {currentUser ? (
        <div style={{color: 'white'}}>
          <h2>Welcome, {currentUser.userName}!</h2>
          <div>{currentUser.userEmail}</div>
          <button>logout</button>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}