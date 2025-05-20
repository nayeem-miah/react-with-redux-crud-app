import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="text-red-500 text-2xl flex justify-center items-center
        mx-auto my-auto">
            <div>
                error page
                <h3>
                    <button className="hover:text-amber-600 text-xl hover:underline"><Link to={'/'}>go to Home</Link></button>
                </h3>
            </div>
        </div>
    );
};

export default Error;