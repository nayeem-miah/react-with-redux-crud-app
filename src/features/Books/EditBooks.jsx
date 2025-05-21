import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateBook } from "./BookSlice";

const EditBooks = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { book } = location.state;
    // console.log(book);
    const dispatch = useDispatch();

    // updated function
    const handleUpdated = async (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const author = e.target.author.value;
        const updatedData = {
            title, author
        }
        // console.log(updatedData);

        const res = await axios.put(`http://localhost:5000/book/update-book/${book._id}`, updatedData)
        console.log(res.data.data);
        if (res.status === 200 || res.data.data.modifiedCount > 0) {
            alert(res.data.message);
            dispatch(updateBook(book))
            navigate("/show-books");
        }
    };

    return (
        <div className="py-10">
            <form onSubmit={handleUpdated} className="max-w-md mx-auto bg-white p-6 rounded shadow-md mt-6 space-y-4">
                <h2 className="text-xl font-semibold text-center">updated Book</h2>
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        defaultValue={book.title}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter book title"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Author</label>
                    <input
                        type="text"
                        name="author"
                        defaultValue={book.author}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter author name"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded"
                >
                    updated
                </button>
            </form>
        </div>
    )
}
export default EditBooks;