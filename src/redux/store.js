import { configureStore } from "@reduxjs/toolkit";

// import user from "./modules/user";
import pokelistReducer from "./modules/pokelist";

const store = configureStore({
  reducer: {
    pokelist: pokelistReducer,
  },
});

export default store;
