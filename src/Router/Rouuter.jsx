import { BrowserRouter, createBrowserRouter, Link, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div className="text-red-500 text-2xl flex justify-center items-center
        mx-auto my-auto">
            <div>
                error page
                <h3>
                    <button className="hover:text-amber-600 text-xl hover:underline"><Link to={'/'}>go to Home</Link></button>
                </h3>
            </div>
        </div>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]

    }
]);
export default router;



// const index = () => {
//     return <BrowserRouter>
//         <Routes
//     </BrowserRouter>
// }