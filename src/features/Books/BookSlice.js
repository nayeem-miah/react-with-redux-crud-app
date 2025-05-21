import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    books: []
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {
        showBooks: (state, action) => {
            state.books = action.payload
       },
        addBooks: (state, action) => {
            state.books.push(action.payload);
        }
    }
});

export const { showBooks, addBooks } = booksSlice.actions;
export default booksSlice.reducer;



