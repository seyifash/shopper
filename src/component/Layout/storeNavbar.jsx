"use client"
import React ,{ useState } from "react"
import Link from "next/link"
import '../../constants/store.css'
import { Colors } from "@/constants/colors"
import Input from "../common/Input"
import { useIsMobile } from "@/Utils/useMobile"
import { useCategoriesQuery } from "@/queries/products/categories";
import Skeleton from "../common/Skeleton"

const categories = [
    "New In",
    "Designers",
    "Trending",
    "Clothing",
    "T-shirts",
    "Pants",
    "Accessories",
    "Bags",
    "Shoes",
    "Jewelry"
]

export default  function StoreNavbar() {

    const {data: categories, isLoading, isError} = useCategoriesQuery();
    const [ifFreeOffers, setFreeOffers] = useState(true)
    const [searchWord, setSearchWord] = useState('');
    const [active, setActive] = useState("New In");
    const [isLoggedIn, setIsloggedIn] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showInput, setShowInput] = useState(false)
    const totalCart = 6


    const isMobile = useIsMobile(600);
    const handleSearch = () => {
        console.log("search word entered")
        setSearchWord("")
    }

    return (
        <section className="headers flex flex-col sticky w-[100vw] bg-white top-0 left-0 shadow-[0_5px_15px_rgba(0,0,0,0.06)] z-[1000]">
            <header className="the-headers flex justify-between w-full items-center pd bg-white">
                    <div className="shipping-sales text-[12px]">
                        <span className="head-cont ">
                            Free shipping
                        </span>
                    </div>
                    <div className="Business-name text-[40px]">
                        <span className="head-cont useQuesha">
                            Shoppers
                        </span>
                    </div>
                    <div className="nav-main-3 relative">

                        {isMobile && showInput && (
                            <div className="fixed pInput top-12  left-1/2 -translate-x-1/2 w-[80%] max-w-[320px] flex items-center border border-[#686477] rounded-lg bg-white z-[2000] shadow-md transition-all duration-300">
                            <i
                                className="bx bx-search text-[14px]"
                                onClick={handleSearch}
                            ></i>
                            <input
                                type="text"
                                placeholder="Search product"
                                className="outline-none flex-1 ml-2"
                                value={searchWord}
                                onChange={(e) => setSearchWord(e.target.value)}
                            />
                            </div>
                        )}
                        <ul id="navbar" className="flex items-center justify-center bg-white relative">
                           <li
                            className={`flex items-center hover:border hover:border-[#686477] hover:rounded-lg group ${
                                isMobile ? "cursor-pointer" : ""
                            }`}
                            onClick={() => isMobile && setShowInput(prev => !prev)}
                            >
                            <i className="bx bx-search"></i>
                            {!isMobile && (
                                <input
                                type="text"
                                placeholder="search for a product"
                                className="hidden group-hover:block outline-none ml-2"
                                value={searchWord}
                                onChange={(e) => setSearchWord(e.target.value)}
                                />
                            )}
                            </li>
                            <li className="relative group">
                                <i
                                    className="bx bxs-user-detail text-[1.2rem] font-semibold transition-all duration-300 ease-in-out cursor-pointer"
                                    onClick={() => setMenuOpen((prev) => !prev)} // Toggle on mobile
                                ></i>

                                {/* Dropdown for desktop hover */}
                                {!isMobile &&
                                <ul
                                    className={`dropdown w-[120px] z-[1000] -left-10 sm:-left-5 rounded-lg text-sm absolute hidden md:group-hover:flex flex-col shadow-md`}
                                    
                                    style={{ backgroundColor: Colors.hslColor }}
                                >
                                    {isLoggedIn ? (
                                    <>
                                        <li className="px-3 py-2 text-left hover:bg-gray-600 rounded-lg">
                                        <Link  href="/profile">My Profile</Link>
                                        </li>
                                        <hr />
                                        <li className="px-3 py-2 text-left hover:bg-gray-600 rounded-lg">
                                        <Link href="/logout">Logout</Link>
                                        </li>
                                    </>
                                    ) : (
                                    <li className="px-3 py-2 text-left hover:bg-gray-600 rounded-lg">
                                        <Link href="/login">Login</Link>
                                    </li>
                                    )}
                                </ul>
                                }

                                {/* Dropdown for mobile (toggle) */}
                                {menuOpen && isMobile && (
                                    <ul
                                    className="dropdown w-[120px] z-[1000] -left-10 sm:-left-5 rounded-lg text-sm absolute flex flex-col md:hidden shadow-md"
                                    style={{ backgroundColor: Colors.hslColor }}
                                    >
                                    {isLoggedIn ? (
                                        <>
                                        <li className="px-3 py-4 text-left hover:bg-gray-600 rounded-lg">
                                            <Link href="/profile">My Profile</Link>
                                        </li>
                                        <hr />
                                        <li className="px-3 py-2 text-left hover:bg-gray-600 rounded-lg">
                                            <Link href="/logout">Logout</Link>
                                        </li>
                                        </>
                                    ) : (
                                        <li className="px-3 py-2 text-left hover:bg-gray-600 rounded-lg">
                                        <Link href="/login">Login</Link>
                                        </li>
                                    )}
                                    </ul>
                                )}
                            </li>

                            <li><Link className="text-[1.2rem] font-semibold transition-all duration-300 ease-in-out" style={{color: Colors.navBarText}} href="/cart"><i className='bx bx-shopping-bag'></i></Link>
                            <span className="crt">{totalCart}</span></li>
                            <Link className="text-[1.2rem] font-semibold transition-all duration-300 ease-in-out" style={{color: Colors.navBarText}} href="#" id="close"><i className='bx bx-x'></i></Link>
                        </ul>
                    </div>
                    <div id="mobile">
                        <i id="bar" className='bx bx-menu'></i>
                    </div>
            </header>
            <nav className="w-full flex justify-center categories">
                <div className="w-[70%] overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 whitespace-nowrap py-3 px-2 justify-start">

                    {isLoading || isError ? (
                        // Skeleton placeholders (you can use your Skeleton component here)
                        Array.from({ length: 10 }).map((_, i) => (
                            
                             <Skeleton
                            key={i}
                            width="90px"
                            height="35px"
                            rounded="full"
                            className="flex-shrink-0"
                            />
                        ))
                    ) : (
                        categories?.map((category, index) => (
                        <span
                            key={index}
                            onClick={() => setActive(category)}
                            className={`categories-name cursor-pointer px-3 py-4 text-sm font-medium flex-shrink-0 transition-all duration-300 rounded-full text-center
                            ${
                                active === category
                                ? "bg-black text-white shadow-md active"
                                : ""
                            }`}
                        >
                            {category}
                        </span>
                        ))
                    )}
                    
                    </div>
                </div>
                </nav>


        </section>
    )
}