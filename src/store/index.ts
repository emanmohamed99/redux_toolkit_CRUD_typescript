
import { configureStore } from "@reduxjs/toolkit";
import books from "./BookSlice";
import auth from "./authSlice";



const store = configureStore({
  reducer: {
    books: books,
    auth: auth,
   
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store


