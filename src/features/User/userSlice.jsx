import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const getuserlocalstorg = () => {
  return JSON.parse(
    localStorage.getItem(`User_Admin_${localStorage.getItem("UserAdminID")}`)
  );
};
const initialState = {
  user: getuserlocalstorg(),
  roleuser: "",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    LoginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.token };
      const User_id = `User_Admin_${user.id}`;
      console.log(user);
      state.user = user;
      toast.success("Login Successfully");
      localStorage.setItem("UserAdminID", user.id);
      localStorage.setItem(User_id, JSON.stringify(state.user));
    },
    UpdateDatauser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.token };
      state.user = user;
      toast.success("Update Data Successfully");
    },
    LogoutUser: (state) => {
      localStorage.removeItem("UserAdminID");
      localStorage.removeItem(`User_Admin_${state.user.id}`);
      state.user = null;
      toast.success("log out Successfully");
    },
    setroleUser: (state, action) => {
      if (action.payload == "admin") state.roleuser = "Users";
      else state.roleuser = "Customers";
    },
  },
});
export const { LoginUser, LogoutUser, UpdateDatauser, setroleUser } =
  userSlice.actions;
export default userSlice.reducer;
