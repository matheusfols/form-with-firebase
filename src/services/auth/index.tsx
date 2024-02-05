import { firebaseAuth } from '@/config/firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const login = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

const logout = async () => {
  return await signOut(firebaseAuth);
};

const addUser = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

const checkUser = async () => {
  let userInfo = null;
  await onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      userInfo = user;
    }
  });

  return userInfo;
};

export { login, logout, addUser, checkUser };
