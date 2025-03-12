import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AppContainer, InputStyle } from '../../styles/Common.styled';
import { InputLabelStyle, ErrorText} from '../../styles/Fonts.styled';
import { BtnStyle } from '../../styles/Buttons.styled';
import { db } from '../../config/firebase';
import { getFirestore, addDoc, collection, setDoc, getDocs, getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


type ProfileFormValues = {
  weight: number;
  height: number;
  age: number;
  goal: string;
  activity: string;
  gender: string;
}


export async function saveUserProfile(uid: string, profileData: {
  weight: number;
  height: number;
  age: number;
  goal: string;
  activity: string;
  gender: string;
}) {
  const userDocRef = doc(db, "users", uid);
  await setDoc(userDocRef, { profile: profileData }, { merge: true });
}

export default function ProfileForm() {

  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authSlice)





  // const initialValues: ProfileFormValues = {
  //   weight: currentUser.profile?.weight || 70,
  //   height: currentUser.profile?.height || 170,
  //   age: currentUser.profile?.age || 25,
  //   goal: currentUser.profile?.goal || '',
  //   activity: currentUser.profile?.activity || '',
  //   gender: currentUser.profile?.gender || ''
  // };


  const initialValues: ProfileFormValues = {
    weight: 70,
    height: 170,
    age: 25,
    goal: '',
    activity:  '',
    gender: '',
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
      if (!currentUser) throw new Error("User ID missing!");
      // await updateUserProfile(currentUser, values);
      // // Обновляем Redux
      // dispatch(setUser({
      //   uid: currentUser,
      //   userName: currentUser.userName || '',
      //   userEmail: currentUser.userEmail || '',
      //   profile: values,
      // }));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };


  return (
    <AppContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
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
          <Field name="goal" as="select" style={{ width: "350px", height: "35px" }}>
            <option value="">Select Goal</option>
            <option value="lose">Lose Weight</option>
            <option value="gain">Gain Muscle</option>
            <option value="maintain">Maintain</option>
          </Field>
          <ErrorMessage name="goal" component={ErrorText} />

          <InputLabelStyle htmlFor="activity">Activity</InputLabelStyle>
          <Field name="activity" as="select" style={{ width: "350px", height: "35px" }}>
            <option value="">Select Activity</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </Field>
          <ErrorMessage name="activity" component={ErrorText} />

          <InputLabelStyle htmlFor="gender">Gender</InputLabelStyle>
          <Field name="gender" as="select" style={{ width: "350px", height: "35px" }}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage name="gender" component={ErrorText} />

          <BtnStyle type="submit">Save Profile</BtnStyle>
        </Form>
      </Formik>
    </AppContainer>
  );
}