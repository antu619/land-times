import { useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  // Context
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Career</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-base-100 my-2">
        <div className="navbar-start">
          {user ? (
            <div className="flex items-center gap-2">
              {
                user.photoURL ?
                <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              :
              <FaCircleUser className="text-4xl mr-2" />
              }
              <p className="font-poppins">{user?.displayName}</p>
            </div>
          ) : (
            <FaCircleUser className="text-4xl mr-2" />
          )}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn btn-neutral w-28">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="btn btn-neutral w-28">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
