import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    books: [
        { id: 1, title: "perea doxical sazid", author: "arif azad" },
        { id: 2, title: "i love Bd", author: "unknown person" },
        { id: 3, title: "perea doxical sazid", author: "arif azad" },
    ]
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {
        showBooks : (state)=>state,
    }
});

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;



