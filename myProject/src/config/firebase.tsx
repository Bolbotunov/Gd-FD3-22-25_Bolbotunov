import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { ProductType } from '../store/AuthSlice';

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


export async function addProductToUser(uid: string, product: ProductType) {
  const userDocRef = doc(db, "users", uid);
  await updateDoc(userDocRef, {
    products: arrayUnion(product)
  });
}

export async function updateUserProductInFirebase(uid: string, updatedProduct: ProductType) {
  const userDocRef = doc(db, "users", uid);
  // Здесь вам нужно реализовать логику обновления массива продуктов.
  // Один из вариантов — взять весь массив из Firestore, обновить нужный элемент и сохранить обратно.
  // Для примера предполагаем, что у вас уже есть функция, которая делает такое обновление.
  await updateDoc(userDocRef, {
    // Предположим, поле "products" хранит массив продуктов
    // Логика обновления зависит от структуры данных. 
    // Приведем базовый пример:
    products: updatedProduct, 
    // Набор данных, который вы хотите обновить (нужно реализовать соответствующую логику)
  });
}

export { auth, app, db };

