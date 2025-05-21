import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { showBooks } from "./BookSlice";

const ShowBooks = () => {
    const books = useSelector(state => state.booksReducer.books);
    const dispatch = useDispatch();

    // get fetching data 
    const fetchingData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/book/all-books");
            dispatch(showBooks(res.data.data));
        } catch (error) {
            console.log("fetching data error ", error);
        }
    };

    useEffect(() => {
        fetchingData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    return (
        <div>
            <h3 className="text-2xl text-center py-4"> Show Books list of the books</h3>
            <div className="my-10">
                <table className="w-full border border-gray-300 shadow-md rounded-md overflow-hidden text-center">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border">Id</th>
                            <th className="p-3 border">Title</th>
                            <th className="p-3 border">Author</th>
                            <th className="p-3 border">Edit</th>
                            <th className="p-3 border">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books.map((book, id = 0) => (
                            <tr key={book._id} className="hover:bg-gray-50 transition">
                                <td className="p-3 border">{id = id + 1}</td>
                                <td className="p-3 border">{book.title}</td>
                                <td className="p-3 border">{book.author}</td>
                                <td className="p-3 border">
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded">Edit</button>
                                </td>
                                <td className="p-3 border">
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>
    )
}
export default ShowBooks;