import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BtnStyle } from '../styles/Buttons.styled';
import { BlurContainer, Flex, InputStyle } from '../styles/Common.styled';
import {
  InputLabelStyle,
  MainTitle,
  ErrorText,
  InformationText,
  FontsHeaderStyle,
} from '../styles/Fonts.styled';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/AuthSlice';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import LoadingScreen from '../components/Spinner/LoadingScreen';
import { CustomThemeProvider } from '../contexts/ThemeContext';

type LoginType = {
  email: string;
  password: string;
};

export default function UserLoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  function loginUser({ email, password }: LoginType) {
    setIsLoading(true);
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
        navigate('/home');
      })
      .catch((error) => {
        setLoginError('User or password incorrect! Try again!');
        console.error('Error', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      {isLoading ? (
        <CustomThemeProvider>
          <LoadingScreen />
        </CustomThemeProvider>
      ) : (
        <div>
          <BlurContainer style={{ justifyContent: 'center' }}>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
                password: Yup.string()
                  .min(6, 'Password must be at least 6 characters')
                  .required('Required'),
              })}
              onSubmit={loginUser}
            >
              <Form>
                <Flex style={{ flexDirection: 'column' }}>
                  <MainTitle style={{ marginBottom: '30px' }}>
                    Please, Log in!
                  </MainTitle>
                  {loginError && <ErrorText>{loginError}</ErrorText>}

                  <InputLabelStyle htmlFor='email'>
                    Email Address
                  </InputLabelStyle>
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
          </BlurContainer>
        </div>
      )}
    </>
  );
}
