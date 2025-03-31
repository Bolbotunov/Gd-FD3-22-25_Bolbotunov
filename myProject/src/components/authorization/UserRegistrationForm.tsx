import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BtnStyle } from '../../styles/Buttons.styled';
import { AppContainer, Flex, InputStyle } from '../../styles/Common.styled';
import {
  InputLabelStyle,
  MainTitle,
  ErrorText,
  InformationText,
  FontsHeaderStyle,
  InformationTextOk,
} from '../../styles/Fonts.styled';
import { auth } from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, UseDispatch } from 'react-redux';
import { updateProfile } from 'firebase/auth';
import { setUser } from '../../store/AuthSlice';
import { useNavigate } from 'react-router';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initializeUserDictionary } from '../../config/firebase';

type RegisterType = {
  userName: string;
  email: string;
  password: string;
};

export default function UserRegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state: RootState) => state.authSlice.userName);

  function registerUser({ userName, email, password }: RegisterType) {
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        updateProfile(user, { displayName: userName });
        dispatch(setUser({ uid, userName, userEmail: email }));
        initializeUserDictionary(uid);
        console.log('User registered and profile updated', uid);
        navigate('/home');
      })
      .catch((error) => {
        console.error('Firebase error:', error);
      });
  }

  useEffect(() => {
    if (userName) {
      navigate('/profile');
    }
  }, [userName, navigate]);

  return (
    <Formik
      initialValues={{ userName: '', email: '', password: '' }}
      validationSchema={Yup.object({
        userName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Required'),
      })}
      onSubmit={registerUser}
    >
      <Form>
        <Flex style={{ flexDirection: 'column' }}>
          <MainTitle style={{ marginBottom: '50px' }}>
            Registartion Form!
          </MainTitle>
          <InputLabelStyle htmlFor='firstName'>Name</InputLabelStyle>
          <Field name='userName' type='text' as={InputStyle} />
          <ErrorMessage name='userName' component={ErrorText} />

          <InputLabelStyle htmlFor='email'>Email Address</InputLabelStyle>
          <Field name='email' type='email' as={InputStyle} />
          <ErrorMessage name='email' component={ErrorText} />

          <InputLabelStyle htmlFor='password'>Password</InputLabelStyle>
          <Field name='password' type='password' as={InputStyle} />
          <ErrorMessage name='password' component={ErrorText} />

          <BtnStyle type='submit'>Sign up</BtnStyle>
          <InformationTextOk>
            Already have an account?{' '}
            <FontsHeaderStyle to={'/'}> Please, log in</FontsHeaderStyle>
          </InformationTextOk>
        </Flex>
      </Form>
    </Formik>
  );
}
