import { configureStore } from "@reduxjs/toolkit";

//예시
// import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    //예시
    // counter: counterReducer,
  },
});
