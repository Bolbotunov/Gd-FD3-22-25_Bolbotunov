import React, { JSX } from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { auth } from '../firebase/firebase';

type ProtectedRouteProps = {
  children: JSX.Element;
};

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps): JSX.Element {
  const { uid } = useSelector((state: RootState) => state.authSlice);
  if (!uid && !auth.currentUser) {
    return <Navigate to='/login' replace />;
  }
  return children;
}
