import axios from "axios";
import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit';




export const fetchBooks = createAsyncThunk(
  "book/fetchBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("http://localhost:7400/books");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const insertBook= createAsyncThunk(
  "book/insertBook",
  async (bookData:any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        "http://localhost:7400/books",
        bookData
      );
   

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (data:any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await axios.delete(`http://localhost:7400/books/${data.id}`, {});
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export type Book={
  id: number,
  title: string,
  price: string,
  description:string,
      
}
type initalStateType={
  loading:boolean,
  error:null|boolean|undefined|string,
  books:Book[],
}
const initialState: initalStateType={ books: [], loading: false, error: null }
const BookSlice = createSlice({
  name: "Book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.loading = true;
        state.error = null;
     
    })
    
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
        state.books = action.payload;
         state.error = null;
     
    })
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.error.message;
         state.error = true;
     
    })
    builder.addCase(insertBook.pending, (state, action) => {
      state.loading = true;
        state.error = null;
     
    })
    
    builder.addCase(insertBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
      state.loading = false;
     
    })
    builder.addCase(insertBook.rejected, (state, action) => {
      state.error = action.error.message;
         state.loading = false;
     
    })
    builder.addCase(deleteBook.pending, (state, action) => {
      state.loading = true;
      state.error = null;
     
    })
    
    builder.addCase(deleteBook.fulfilled, (state, action) => {
       state.books = state.books.filter((el) => el.id !== action.payload.id);
      state.loading = false;
     
    })
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.error = action.error.message;
       state.loading = false;
     
    })
  },
});

export default BookSlice.reducer;
