import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-amber-200 p-4 shadow">
            <nav>
                <ul className="flex justify-center md:gap-10 lg:gap-12 gap-5">
                    <li className="hover:text-blue-500">
                        <NavLink to={'/'}
                        >
                            home
                        </NavLink>
                    </li>
                    <li className="hover:text-blue-500">
                        <NavLink to={'/show-books'}
                        >
                            Show Books
                        </NavLink>
                    </li>
                    <li className="hover:text-blue-500">
                        <NavLink to={'add-books'}
                        >
                            Add Books
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
export default Navbar;