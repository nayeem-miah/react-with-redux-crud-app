import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl min-h-screen bg-amber-100">
                <Outlet />
            </div>
            <footer>
                <div>
                    <h3 className="bg-amber-200 p-4 text-center">
                        @ 2025 react redux crud operation
                    </h3>
                </div>
            </footer>
        </div>
    );
}
export default MainLayout;