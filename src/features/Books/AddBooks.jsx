import { useState } from "react";

const AddBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author };
        console.log(newBook);
    }

    return (
        <div className="py-10">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-md mt-6 space-y-4">
                <h2 className="text-xl font-semibold text-center">Add a New Book</h2>

                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter book title"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
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
