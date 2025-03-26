import { JSX, useEffect, useId, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth, db, getUserDictionary } from '../../config/firebase';
import {
  setUser,
  clearUser,
  setDictionaryProducts,
} from '../../store/AuthSlice';
import { useNavigate } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { initializeUserDictionary } from '../../config/firebase';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const displayName = user.displayName || user.email || '';
        const userDocRef = doc(db, 'users', user.uid);
        const userData = await getDoc(userDocRef);
        const userProfile = userData.exists() ? userData.data().profile : null;
        await initializeUserDictionary(user.uid);
        const dictionaryProducts = await getUserDictionary(user.uid);
        dispatch(setDictionaryProducts(dictionaryProducts));
        dispatch(
          setUser({
            uid: user.uid,
            userName: displayName,
            userEmail: user.email || '',
            profile: userProfile,
          })
        );
      } else {
        dispatch(clearUser());
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
