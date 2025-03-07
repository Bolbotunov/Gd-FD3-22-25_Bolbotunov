import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BtnStyle } from '../../styles/Buttons.styled';
import { AppContainer } from '../../styles/Common.styled';
import { InputStyle } from '../../styles/Common.styled';
import { InputLabelStyle } from '../../styles/Fonts.styled';
import { MainTitle, ErrorText } from '../../styles/Fonts.styled';

export default function UserValidateForm() {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <AppContainer>
          <MainTitle style={{ marginBottom: '50px' }}>
            Please register
          </MainTitle>
          <AppContainer>
            <InputLabelStyle htmlFor="firstName">First Name</InputLabelStyle>
            <Field name="firstName" type="text" as={InputStyle} />
            <ErrorMessage name="firstName" component={ErrorText} />
          </AppContainer>

          <AppContainer>
            <InputLabelStyle htmlFor="lastName">Last Name</InputLabelStyle>
            <Field name="lastName" type="text" as={InputStyle} />
            <ErrorMessage name="lastName" component={ErrorText} />
          </AppContainer>

          <AppContainer>
            <InputLabelStyle htmlFor="email">Email Address</InputLabelStyle>
            <Field name="email" type="email" as={InputStyle} />
            <ErrorMessage name="email" component={ErrorText} />
          </AppContainer>

          <AppContainer>
            <BtnStyle type="submit">Register</BtnStyle>
          </AppContainer>
        </AppContainer>
      </Form>
    </Formik>
  );
};
