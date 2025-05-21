import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "./BookSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const numberOfBooks = useSelector(state => state.booksReducer.books.length);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
            // id: numberOfBooks + 1,
            title,
            author
        };
        console.log(newBook);
        // post data in db
        try {
            const res = await axios.post("http://localhost:5000/book/add-book", newBook);
            if (res.status === 200) {
                alert(res.data.message);
                dispatch(addBooks(newBook));
                navigate("/show-books")
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="py-10">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-md mt-6 space-y-4">
                <h2 className="text-xl font-semibold text-center">Add a New Book</h2>

                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        required
                        onChange={e => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter book title"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter author name"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddBooks;
