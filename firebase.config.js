import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDecRQH_vmQxURIFT2W942TR8qHgpkwvbM',
  authDomain: 'reactnative-679f3.firebaseapp.com',
  projectId: 'reactnative-679f3',
  storageBucket: 'reactnative-679f3.appspot.com',
  messagingSenderId: '832061204598',
  appId: '1:832061204598:web:19359b597b3f5ebded5757',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
