import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
const {user, logout}=useContext(AuthContext)
  const navOptions = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/menu'}>Menu</Link></li>
    <li><Link to={'/secret'}>Secret</Link></li>
    <li><Link to={'/order/salad'}>Order Food</Link></li>
    {
      !user && <>
      <li><Link to={'/login'}>Login</Link></li>
      <li><Link to={'/register'}>Register</Link></li></>
    }
  </>

  const handleLogout = () =>{
    logout()
  }

  return (
    <div className="navbar max-w-screen-xl fixed z-10 text-white bg-opacity-30 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/'}>{user&& <button onClick={handleLogout} className="bg-blue-500 px-5 py-3">Logout</button>}</Link>
        
      </div>
    </div>
  );
};

export default Navbar;