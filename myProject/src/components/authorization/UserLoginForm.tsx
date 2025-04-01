import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BtnStyle } from '../../styles/Buttons.styled';
import { Flex, InputStyle } from '../../styles/Common.styled';
import {
  InputLabelStyle,
  MainTitle,
  ErrorText,
  InformationText,
  FontsHeaderStyle,
} from '../../styles/Fonts.styled';
import { auth } from '../../firebase/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/AuthSlice';
import { useNavigate } from 'react-router';
import { useState } from 'react';

type LoginType = {
  email: string;
  password: string;
};

export default function UserLoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  function loginUser({ email, password }: LoginType) {
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        const displayName = user.displayName
          ? user.displayName
          : (user.email ?? '');
        dispatch(
          setUser({ uid, userName: displayName, userEmail: email || '' })
        );
        console.log('User login', displayName);
      })
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError('User or password incorrect! Try again!');
        console.error('Error', error);
      });
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Required'),
      })}
      onSubmit={loginUser}
    >
      <Form>
        <Flex style={{ flexDirection: 'column' }}>
          <MainTitle style={{ marginBottom: '50px' }}>
            Please, Log in!
          </MainTitle>
          {loginError && <ErrorText>{loginError}</ErrorText>}

          <InputLabelStyle htmlFor='email'>Email Address</InputLabelStyle>
          <Field name='email' type='email' as={InputStyle} />
          <ErrorMessage name='email' component={ErrorText} />

          <InputLabelStyle htmlFor='password'>Password</InputLabelStyle>
          <Field name='password' type='password' as={InputStyle} />
          <ErrorMessage name='password' component={ErrorText} />

          <BtnStyle type='submit'>Log In</BtnStyle>

          <Flex>
            <InformationText>
              Don't have an account?{' '}
              <FontsHeaderStyle to={'/register'}>
                {' '}
                Please, register
              </FontsHeaderStyle>
            </InformationText>
          </Flex>
        </Flex>
      </Form>
    </Formik>
  );
}
