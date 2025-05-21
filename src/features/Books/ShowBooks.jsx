import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { deleteBooks, showBooks } from "./BookSlice";
import { Link } from 'react-router-dom';

const ShowBooks = () => {
    const [loading, setLoading] = useState(false)
    const books = useSelector(state => state.booksReducer.books);
    const dispatch = useDispatch();

    // get fetching data 
    const fetchingData = async () => {
        setLoading(true)
        try {
            const res = await axios.get("http://localhost:5000/book/all-books");
            dispatch(showBooks(res.data.data));
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log("fetching data error ", error);
        }
    };

    // handle delete
    const handleDelete = async (id) => {
        setLoading(true)
        try {
            const res = await axios.delete(`http://localhost:5000/book/delete-book/${id}`)
            // console.log(res);
            if (res.status === 200 || res.data.result.deletedCount > 0) {
                alert(res.data.message)
                dispatch(deleteBooks(id));
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };


    useEffect(() => {
        fetchingData()
        handleDelete()
    }, [dispatch])

    // loading spinner
    if (loading) return <h3 className="text-center text-amber-300 text-2xl">loading ........</h3>;


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
                                    <Link to={`/updated-book`} state={{ book }} className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded">Edit</Link>
                                </td>
                                <td className="p-3 border">
                                    <button onClick={() => handleDelete(book._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ShowBooks;