import { configureStore } from "@reduxjs/toolkit";
import utilReducer from "./features/Util/utilSlice";
import userReducer from "./features/User/userSlice";
import authReducer from "./features/User/authSlice";
export const store = configureStore({
  reducer: {
    utilState: utilReducer,
    userState: userReducer,
    authState: authReducer,
  },
});
