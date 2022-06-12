//src > redux > modules > user.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // email: "test@test.test",
  // nickname: "test"
  // pw : "",
  // pwcheck: ""
};

export const signupUser = createSlice({
  name: "users",
  initialState,
  reducers: {
    // 함수이름(state, action){
    //   state.list = action.payload.data
    // }
  },
});

// console.log("test@test.test", signupUser)
// export const {함수이름} or useractions = signupUser.actions
export default signupUser.reducer;
