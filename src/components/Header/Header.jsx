import { NavLink } from "react-router-dom";


const Header = () => {
    const navLinks = <>
        <li className="mr-5 sm:mt-3"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-5 sm mt-3"><NavLink to='/login'>LogIn</NavLink></li>
        <li className="mr-5 sm mt-3"><NavLink to='/registration'>Registration</NavLink></li>
        <li className="mr-5 sm mt-3"><NavLink to='/blog'>Blog Page</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a href="#_" className="relative  lg:w-32 px-5 py-3 overflow-hidden font-bold text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">SU ERP</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">LogIn</a>
            </div>
        </div>
    );
};

export default Header;