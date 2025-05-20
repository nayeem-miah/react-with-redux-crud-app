import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl min-h-screen">
                <Outlet />
            </div>
            <div>
                <footer>
                    <h3 className="bg-amber-200 p-4 text-center">
                        @ react redux crud operation
                    </h3>
                </footer>
            </div>
        </div>
    );
}
export default MainLayout;