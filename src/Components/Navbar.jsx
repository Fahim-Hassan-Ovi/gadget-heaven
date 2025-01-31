import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { getAllCarts, getAllWishlist } from "../Utilities";
import { useEffect, useState } from "react";
const Navbar = () => {
    const { pathname } = useLocation();
    const isNotHome = pathname !== "/";
    const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
// Function to update counts from local storage
const updateCounts = () => {
    const cart = getAllCarts();
    const wishlist = getAllWishlist();
    setCartCount(cart.length);
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    updateCounts(); // Initial load
    window.addEventListener("storage", updateCounts); // Listen for storage changes

    return () => {
      window.removeEventListener("storage", updateCounts); // Cleanup event listener
    };
  }, []);

    return (
        <div className="md:mx-6 md:mt-6 ">
            <div className={`navbar md:px-[106px] ${isNotHome ? " bg-white" : " bg-[#9538E2]  rounded-t-2xl"} `}>
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
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/statistics'>Statistics</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/dashboard'>Dashboard</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/reviews'>Reviews</NavLink>

                        </ul>
                    </div>
                    <a className={`btn btn-ghost text-xl ${isNotHome? "text-black" : " text-violet-300"}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/statistics'>Statistics</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/dashboard'>Dashboard</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/reviews'>Reviews</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button"  className={`btn btn-ghost btn-circle ${isNotHome? "text-black" : " text-violet-300"}`}>
                            <div className="indicator ">
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
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {
                                    cartCount>0 && (
                                        <span className={`badge badge-sm indicator-item bg-transparent border-none ${isNotHome? "text-black" : " text-violet-300"}`}>{cartCount}</span>
                                    )
                                }
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{cartCount}</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className={`indicator ${isNotHome? "text-black" : " text-violet-300"}`}>
                                <FaRegHeart size={20} />
                                {
                                    wishlistCount>0 && (
                                        <span className={`badge badge-sm indicator-item bg-transparent border-none ${isNotHome? "text-black" : " text-violet-300"}`}>{wishlistCount}</span>
                                    )
                                }
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{wishlistCount}</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;