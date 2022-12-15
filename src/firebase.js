import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';

//! PUT YOUR FIREBASE PROJECT
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export default app;
const auth = getAuth(app);
export { auth };

// AUTH SYSTEM

function checkAuth(resFn) {
  resFn({ isAuth: !!auth.currentUser, user: auth.currentUser });
}

async function login({ email, password }, resFn) {
  console.log(resFn);
  try {
    const req = await signInWithEmailAndPassword(auth, email, password);
    resFn({ msg: 'signed in successfully', status: 'success' });
  } catch (err) {
    resFn({ msg: 'cannot signin at the moment', status: 'fail' });
  }
}

async function logout(resFn) {
  // logout the user
  try {
    await signOut(auth);
    resFn({ msg: 'signed out successfully', status: 'success' });
  } catch (err) {
    resFn({ msg: 'cannot signout at the moment', status: 'fail' });
  }
}

export { login, logout, checkAuth };
