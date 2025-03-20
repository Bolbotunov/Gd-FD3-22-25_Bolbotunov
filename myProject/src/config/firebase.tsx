import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, updateDoc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import { ProductType } from '../store/AuthSlice';
import { defaultProducts } from './defaultProducts';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)



export async function getUserDictionary(uid: string): Promise<ProductType[]> {
  const userDocRef = doc(db, "users", uid);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data.dictionaryProducts || [];
  } else {
    return [];
  }
}


export async function initializeUserDictionary(uid: string) {
  const userDocRef = doc(db, "users", uid);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    if (!data.dictionaryProducts || data.dictionaryProducts.length === 0) {
      await updateDoc(userDocRef, { dictionaryProducts: defaultProducts });
    }
  } else {
    await setDoc(userDocRef, {
      dictionaryProducts: defaultProducts,
    });
  }
}


export async function addProductToUser(uid: string, product: ProductType) {
  const userDocRef = doc(db, "users", uid);
  await updateDoc(userDocRef, {
    products: arrayUnion(product)
  });
}

export async function updateUserProductInFirebase(uid: string, updatedProduct: ProductType) {
  const userDocRef = doc(db, "users", uid);
  const docSnap = await getDoc(userDocRef);
  if (!docSnap.exists()) {
    throw new Error("User document not found");
  }
  const data = docSnap.data();
  let dictionaryProducts: ProductType[] = data.dictionaryProducts || [];
  const index = dictionaryProducts.findIndex(p => p.food_name === updatedProduct.food_name);

  if (index !== -1) {
    dictionaryProducts[index] = updatedProduct;
  } else {
    dictionaryProducts.push(updatedProduct);
  }
  await updateDoc(userDocRef, { dictionaryProducts });
}


export async function deleteUserProductInFirebase(
  uid: string,
  productToDelete: ProductType
) {
  const userDocRef = doc(db, "users", uid);
  const docSnap = await getDoc(userDocRef);
  if (!docSnap.exists()) {
    throw new Error("User document not found");
  }
  const data = docSnap.data();
  let dictionaryProducts: ProductType[] = data.dictionaryProducts || [];
  const updatedDictionary = dictionaryProducts.filter(
    (p) => p.id !== productToDelete.id
  );
  await updateDoc(userDocRef, { dictionaryProducts: updatedDictionary });
}


export { auth, app, db };

