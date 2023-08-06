import { createSlice } from '@reduxjs/toolkit';
import AuthActions from './authActions';

const defaultUserData = {
  uid: '',
  email: '',
  name: '',
  avatarURL: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: { ...defaultUserData },
  },
  extraReducers: builder => {
    builder
      .addCase(AuthActions.register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
        console.log(payload);
      })
      .addCase(AuthActions.logIn.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(AuthActions.logOut.fulfilled, state => {
        console.log('logout');
        state.isLoggedIn = false;
        state.user = { ...defaultUserData };
      });
  },
});

export const authReducer = authSlice.reducer;
