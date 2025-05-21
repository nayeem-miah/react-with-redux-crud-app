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
        },
        deleteBooks: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book._id !== id);
        }
    }
});

export const { showBooks, addBooks, deleteBooks } = booksSlice.actions;
export default booksSlice.reducer;



