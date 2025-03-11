import { JSX, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../../config/firebase';
import { setUser, clearUser } from '../../store/AuthSlice';
import { useNavigate } from 'react-router'

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName || user.email || '';
        dispatch(
          setUser({
            userName: displayName,
            userEmail: user.email || '',
          })
        );
      } else {
        dispatch(clearUser());
        navigate('/login')
      }
      setLoading(false)
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
