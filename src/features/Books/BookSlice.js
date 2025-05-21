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
        },
        updateBook: (state, action) => {
            const { _id, title, author } = action.payload;
            const isBookExist = state.books.filter(book => book._id === _id);
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        }
    }
});

export const { showBooks, addBooks, deleteBooks , updateBook} = booksSlice.actions;
export default booksSlice.reducer;



