import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from 'firebase/storage';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  getAuth,
} from 'firebase/auth';
import { auth, storage } from '../../../firebase.config';

const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    const { name, email, password, userIconUri } = userData;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, { displayName: name });

      return { uid: user.uid, email, name, avatarURL: '' };
    } catch (error) {
      alert(`RegisterError, ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    const { email, password } = credentials;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, photoURL } = user;

      return {
        uid,
        email,
        name: displayName,
        avatarURL: photoURL,
      };
    } catch (error) {
      alert(`LoginError, ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      console.log('LOGOUT!!');
    } catch (error) {
      alert(`LogoutError, ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export default {
  register,
  logIn,
  logOut,
};
