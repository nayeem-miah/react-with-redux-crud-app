import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
    const books = useSelector((state) => state.booksReducer.books);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-indigo-600">📚 Book Shelf</h1>
                    <p className="mt-2 text-gray-600">Explore a curated collection of books</p>
                </header>

                <div className="flex justify-end mb-6">
                    <Link
                        to="/add-books"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition"
                    >
                        ➕ Add New Book
                    </Link>
                </div>

                {books.length === 0 ? (
                    <p className="text-center text-gray-500">No books found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {books.map((book) => (
                            <div
                                key={book._id || book.id}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                            >
                                <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                                <p className="text-gray-600">By {book.author}</p>
                                <div className="mt-4 flex gap-3">
                                    <Link
                                        to={`show-books`}
                                        className="text-sm text-blue-500 hover:underline"
                                    >
                                        show books
                                    </Link>
                                    <button className="text-sm text-red-500 hover:underline">
                                        🗑️ red more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
