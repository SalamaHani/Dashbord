// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  errors: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    clearErrors(state) {
      state.errors = {};
    },
    clearForm(state) {
      state.email = '';
      state.password = '';
      state.errors = {};
    },
  },
});

export const { setEmail, setPassword, setErrors, clearErrors, clearForm } = authSlice.actions;
export default authSlice.reducer;