import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AddBooks from "../features/Books/AddBooks";
import ShowBooks from "../features/Books/ShowBooks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-books",
                element: <AddBooks />
            },
            {
                path: "/show-books",
                element: <ShowBooks />
            },
        ]

    }
]);
export default router;



// const index = () => {
//     return <BrowserRouter>
//         <Routes
//     </BrowserRouter>
// }