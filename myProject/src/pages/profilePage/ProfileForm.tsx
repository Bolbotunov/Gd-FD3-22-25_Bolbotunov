import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AppContainer, InputStyle } from '../../styles/Common.styled';
import { InputLabelStyle, ErrorText } from '../../styles/Fonts.styled';
import { BtnStyle } from '../../styles/Buttons.styled';
import { db } from '../../config/firebase';
import { getFirestore, addDoc, collection, setDoc, getDocs, getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { setUser, setUserProfile } from '../../store/AuthSlice';
import { SelectStyle } from '../../styles/Common.styled';

type ProfileFormValues = {
  weight: number;
  height: number;
  age: number;
  goal: string;
  activity: string;
  gender: string;
}


export async function saveUserProfile(uid: string, profileData: ProfileFormValues) {
  const userDocRef = doc(db, "users", uid);
  await setDoc(userDocRef, { profile: profileData }, { merge: true });
}

export default function ProfileForm() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authSlice)

  const profile = useSelector((state: RootState) => state.authSlice.profile?.age);
  console.log('profile:', profile)
  console.log('currentUser:', currentUser)

  const initialValues: ProfileFormValues = {
    weight: currentUser.profile?.weight || 70,
    height: currentUser.profile?.height || 170,
    age: currentUser.profile?.age || 25,
    goal: currentUser.profile?.goal || '',
    activity: currentUser.profile?.activity || '',
    gender: currentUser.profile?.gender || ''
  };


  const validationSchema = Yup.object({
    weight: Yup.number().required('Required').positive('Must be positive'),
    height: Yup.number().required('Required').positive('Must be positive'),
    age: Yup.number().required('Required').min(1, 'Age must be at least 1'),
    goal: Yup.string().required('Required'),
    activity: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
  });


  const handleSubmit = async (values: ProfileFormValues) => {
    try {
      if (!currentUser.uid) throw new Error("User ID missing!");

      await saveUserProfile(currentUser.uid, values);
      dispatch(setUserProfile(values));
      alert("!!!!Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
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
      <AppContainer>
        <InputLabelStyle htmlFor="weight">Weight (kg)</InputLabelStyle>
        <Field name="weight" type="number" as={InputStyle} />
        <ErrorMessage name="weight" component={ErrorText} />

        <InputLabelStyle htmlFor="height">Height (cm)</InputLabelStyle>
        <Field name="height" type="number" as={InputStyle} />
        <ErrorMessage name="height" component={ErrorText} />

        <InputLabelStyle htmlFor="age">Age</InputLabelStyle>
        <Field name="age" type="number" as={InputStyle} />
        <ErrorMessage name="age" component={ErrorText} />

        <InputLabelStyle htmlFor="goal">Goal</InputLabelStyle>
        <SelectStyle name="goal" as="select" style={{ width: "350px", height: "35px" }}>
          <option value="" disabled hidden>Select goal</option>
          <option value="lose">Lose Weight</option>
          <option value="gain">Gain Muscle</option>
          <option value="maintain">Maintain</option>
        </SelectStyle>
        <ErrorMessage name="goal" component={ErrorText} />

        <InputLabelStyle htmlFor="activity">Activity</InputLabelStyle>
        <SelectStyle name="activity" as="select" style={{ width: "350px", height: "35px" }}>
          <option value="" disabled hidden>Select Activity</option>
          <option value="low">Low</option>
          <option value="moderate">Average</option>
          <option value="high">High</option>
        </SelectStyle>
        <ErrorMessage name="activity" component={ErrorText} />

        <InputLabelStyle htmlFor="gender">Gender</InputLabelStyle>
        <SelectStyle name="gender" as="select" style={{ width: "350px", height: "35px" }}>
          <option value="" disabled hidden>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </SelectStyle>
        <ErrorMessage name="gender" component={ErrorText} />

        <BtnStyle type="submit">Save Profile</BtnStyle>
        </AppContainer>
      </Form>
      </Formik>
  );
}