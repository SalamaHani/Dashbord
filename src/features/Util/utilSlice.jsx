import { createSlice } from "@reduxjs/toolkit";

const themes = {
  Dark: "dark",
  Light: "light",
};
// const Saidbar ={
//   Open:'oprn',
//   Close:'wlose'
// }
const getlocalstorgthemes = () => {
  const theme = localStorage.getItem("themes") || themes.Light;
  document.body.setAttribute("class", theme);
  return theme;
};

const geltisOpenSaidbar = () => {
  const isopen = localStorage.getItem("Saidbar");
  return isopen;
};
const defuletValue = {
  theme: getlocalstorgthemes(),
  isSaidparOpen: geltisOpenSaidbar(),
  ismodeleidt: false,
  error: {},
  masegaeerorr: "",
};
const utilSlice = createSlice({
  name: "util",
  initialState: defuletValue,
  reducers: {
    toogelthemes: (state) => {
      const { Dark, Light } = themes;
      state.theme = state.theme == Dark ? Light : Dark;
      document.body.setAttribute("class", state.theme);
      localStorage.setItem("themes", state.theme);
    },
    toogelSaidpar: (state) => {
      state.isSaidparOpen = state.isSaidparOpen ? false : true;
      localStorage.setItem("Saidbar", state.isSaidparOpen);
    },
    toogelModeleidt: (state) => {
      state.ismodeleidt = state.ismodeleidt ? false : true;
    },
    seterrorsmasge: (state, action) => {
      const errors = action.payload;
      state.error = errors;
    },
    clearerrors: (state) => {
      state.error = {};
    },
    setmasegerror: (state, action) => {
      state.masegaeerorr = action.payload;
    },
  },
});
export const {
  toogelthemes,
  toogelSaidpar,
  seterrorsmasge,
  clearerrors,
  setmasegerror,
  toogelModeleidt,
} = utilSlice.actions;
export default utilSlice.reducer;
