import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Flex, InputStyle } from '../../styles/Common.styled';
import { InputLabelStyle, ErrorText } from '../../styles/Fonts.styled';
import { BtnStyle } from '../../styles/Buttons.styled';
import { setUserProfile } from '../../store/AuthSlice';
import { SelectStyle } from '../../styles/Common.styled';
import { ProfileType } from '../../store/AuthSlice';
import { saveUserProfile } from '../../firebase/firebase';
import { toast } from 'react-toastify';

export default function ProfileForm() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const initialValues: ProfileType = {
    weight: currentUser.profile?.weight || 70,
    height: currentUser.profile?.height || 170,
    age: currentUser.profile?.age || 25,
    goal: currentUser.profile?.goal || '',
    activity: currentUser.profile?.activity || '',
    gender: currentUser.profile?.gender || '',
  };

  const validationSchema = Yup.object({
    weight: Yup.number().required('Required').positive('Must be positive'),
    height: Yup.number().required('Required').positive('Must be positive'),
    age: Yup.number().required('Required').min(1, 'Age must be at least 1'),
    goal: Yup.string().required('Required'),
    activity: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
  });

  const handleSubmit = async (values: ProfileType) => {
    try {
      if (!currentUser.uid) throw new Error('User ID missing!');

      await saveUserProfile(currentUser.uid, values);
      dispatch(setUserProfile(values));
      toast.success('Profile update successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Flex style={{ padding: '0px', flexDirection: 'column', gap: '4px' }}>
          <InputLabelStyle htmlFor='weight'>Weight (kg)</InputLabelStyle>
          <Field name='weight' type='number' as={InputStyle} />
          <ErrorMessage name='weight' component={ErrorText} />

          <InputLabelStyle htmlFor='height'>Height (cm)</InputLabelStyle>
          <Field name='height' type='number' as={InputStyle} />
          <ErrorMessage name='height' component={ErrorText} />

          <InputLabelStyle htmlFor='age'>Age</InputLabelStyle>
          <Field name='age' type='number' as={InputStyle} />
          <ErrorMessage name='age' component={ErrorText} />

          <InputLabelStyle htmlFor='goal'>Goal</InputLabelStyle>
          <Field
            as={SelectStyle}
            name='goal'
            style={{ width: '350px', height: '35px' }}
          >
            <option value=''>Select goal</option>
            <option value='lose'>Lose Weight</option>
            <option value='maintain'>Maintain</option>
            <option value='gain'>Gain </option>
          </Field>
          <ErrorMessage name='goal' component={ErrorText} />

          <InputLabelStyle htmlFor='activity'>Activity</InputLabelStyle>
          <Field
            as={SelectStyle}
            name='activity'
            style={{ width: '350px', height: '35px' }}
          >
            <option value=''>Select Activity</option>
            <option value='Low'>Low</option>
            <option value='Average'>Average</option>
            <option value='High'>High</option>
          </Field>
          <ErrorMessage name='activity' component={ErrorText} />

          <InputLabelStyle htmlFor='gender'>Gender</InputLabelStyle>
          <Field
            as={SelectStyle}
            name='gender'
            style={{ width: '350px', height: '35px' }}
          >
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </Field>
          <ErrorMessage name='gender' component={ErrorText} />

          <BtnStyle type='submit'>Save Profile</BtnStyle>
        </Flex>
      </Form>
    </Formik>
  );
}
