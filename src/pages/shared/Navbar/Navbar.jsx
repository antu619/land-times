import React from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 my-2">
                <div className="navbar-start">
                <FaCircleUser className='text-4xl mr-2' />
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn btn-neutral w-28">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;