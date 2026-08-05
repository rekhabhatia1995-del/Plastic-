import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaShippingFast, FaReceipt, FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes, FaHome, FaInfoCircle, FaBox, FaCogs, FaClipboardList, FaBlog, FaTags, FaPhoneAlt as FaPhoneContact } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", icon: <FaHome />, path: "/" },
        { name: "About", icon: <FaInfoCircle />, path: "/about" },
        { name: "Product", icon: <FaBox />, path: "/product" },
        { name: "Catagery", icon: <FaTags />, path: "/catageries" },
        { name: "Bulk Order", icon: <FaClipboardList />, path: "/bulkorder" },
        { name: "Blog", icon: <FaBlog />, path: "/" },
        { name: "Contact", icon: <FaPhoneContact />, path: "/contact" },
    ];

    return (
        <>
            <div className=" justify-between flex  p-4 items-center bg-sky-100 p-2 text-sm px-2 md:px-4 ">

                <div className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
                    <FaPhoneAlt className="text-blue-900 text-xs md:text-sm ml-4" />
                    <span className="text-blue-900 text-xs md:text-sm tracking-tight">+91 9584385703</span>
                </div>

                <div className="hidden sm:flex items-center gap-1 md:gap-2 whitespace-nowrap">
                    <FaEnvelope className="text-blue-900 text-xs md:text-sm" />
                    <span className="text-blue-900 text-xs md:text-sm tracking-tight">oceanplastic81@gmai.com</span>
                </div>

                <div className="hidden md:flex items-center gap-1 md:gap-2 whitespace-nowrap">
                    <FaShippingFast className="text-blue-900 text-lg md:text-2xl" />
                    <span className="text-blue-900 text-xs md:text-sm font-medium tracking-wide">Fast Delivery</span>
                </div>

                <div className="hidden lg:flex items-center gap-1 md:gap-2 whitespace-nowrap mr-4">
                    <FaReceipt className="text-blue-900 text-lg md:text-2xl" />
                    <span className="text-blue-900 text-xs md:text-sm font-medium tracking-wide">GST Billing Available</span>
                </div>

            </div>
            <div className="flex items-center   justify-between gap-2 md:gap-6 px-3 md:px-8 py-4 bg-white shadow-sm min-h-20">


                <div className="w-28 md:w-48 h-full flex items-center ">
                    <img
                        src={logo}
                        alt="Plastic Product"
                        className="w-full h-20 md:h-22 rounded"
                    />
                </div>



                <div className="flex items-center shadow-sm rounded-xl overflow-hidden flex-1 max-w-[150px] sm:max-w-[300px] md:max-w-[500px] h-10 md:h-12 shadow-sm focus-within:ring-2 focus-within:ring-green-500">

                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 h-full px-2 md:px-5 outline-none text-xs md:text-sm min-w-0"
                    />
                    <select className="hidden  p-2 sm:block h-full shadow-xl px-1 md:px-3 text-xs md:text-sm outline-none bg-white">
                        <option>All</option>
                        <option>Bucket</option>
                        <option>Mug</option>
                        <option>Container</option>
                    </select>


                    <button className="bg-lime-500 hover:bg-green-500  p-2 transition text-white h-full px-3 md:px-5 flex items-center justify-center">
                        <FaSearch className="text-sm md:text-lg" />
                    </button>

                </div>

                <div className="flex items-center gap-3 md:gap-6 lg:gap-10 flex-shrink-0">

                    <div className="text-center cursor-pointer group hidden sm:block">

                        <FaHeart className="text-lg md:text-2xl mx-auto group-hover:text-red-500 transition" />

                        <p className="hidden md:block text-xs md:text-sm mt-0 md:mt-1">
                            Wishlist
                        </p>

                    </div>

                    <div className="text-center cursor-pointer group">

                        <FaShoppingCart className="text-lg md:text-2xl mx-auto group-hover:text-green-600 transition" />

                        <p className="hidden md:block text-xs md:text-sm mt-0 md:mt-1">
                            Cart
                        </p>

                    </div>

                    <div className="cursor-pointer">

                        <div className="flex items-center gap-1 md:gap-2">

                            <FaUser className="text-base md:text-xl" />

                            <span className="text-xs md:text-sm font-medium hidden sm:inline">
                                Login
                            </span>

                        </div>
                        <p className="hidden md:block text-xs text-gray-500 mt-1">
                            Login/Register
                        </p>
                    </div>


                    <button
                        onClick={() => setMenuOpen(true)}
                        className="block lg:hidden text-blue-900 hover:text-green-600 transition p-1"
                        aria-label="Open menu"
                    >
                        <FaBars className="text-xl md:text-2xl" />
                    </button>

                </div>


            </div>


            <div className="hidden lg:flex justify-between items-center  ">
                <ul className="gap-6 lg:gap-10 xl:gap-40 font-medium bg-[#0b1b4d] text-white flex w-full p-2 lg:p-4 h-12 justify-center items-center">
                    <li className="hover:text-green-600 cursor-pointer ml-2  text-xs lg:text-sm font-semibold uppercase whitespace-nowrap">
                        <a href="/">Home</a>
                    </li>
                    <li className="hover:text-green-600 cursor-pointer text-xs lg:text-sm font-semibold uppercase whitespace-nowrap">
                        <a href="/about">About</a>
                    </li>

                    <li className="hover:text-green-600 cursor-pointer  text-xs lg:text-sm font-semibold uppercase whitespace-nowrap">
                        <a href="/product">Product</a>
                    </li>
                    <li className="hover:text-green-600 cursor-pointer  text-xs lg:text-sm font-semibold uppercase whitespace-nowrap">
                        <a href="/catageries">Catagery</a>
                    </li>
                    <Link to="/bulkorder" className="hover:text-green-600 cursor-pointer text-xs lg:text-sm font-semibold uppercase whitespace-nowrap"
                    >Bulk Order</Link>
                    <li className="hover:text-green-600 cursor-pointer  text-xs lg:text-sm font-semibold uppercase whitespace-nowrap">
                        Blog
                    </li>
                    <Link to="/contact" className="hover:text-green-600 cursor-pointer text-xs lg:text-sm font-semibold uppercase whitespace-nowrap"
                    >Contact </Link>
                </ul>
            </div>


            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                    onClick={() => setMenuOpen(false)}
                >
                    <div
                        className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 animate-slide-in"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="flex items-center justify-between p-4 border-b bg-blue-900 text-white">
                            <h2 className="font-bold text-lg tracking-wide">Menu</h2>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-white hover:text-green-300 transition p-1"
                                aria-label="Close menu"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>


                        <nav className="p-4">
                            <ul className="space-y-1">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setMenuOpen(false)}
                                            className="flex items-center gap-4 w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition font-medium text-sm tracking-wide"
                                        >
                                            <span className="text-blue-900 text-lg">{link.icon}</span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <FaPhoneAlt className="text-blue-900" />
                                <span>+91 9584385703</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                                <FaEnvelope className="text-blue-900" />
                                <span className="truncate">rekhabhatia1995@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default Header;

