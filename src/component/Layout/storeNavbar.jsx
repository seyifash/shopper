"use client"
import React ,{ useState } from "react"
import Link from "next/link"
import '../../app/globals.css'
import '../../constants/store.css'


export default  function StoreNavbar() {

    const [ifFreeOffers, setFreeOffers] = useState(true)

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
                    <div>
                        <ul id="navbar" className="flex items-center justify-center">
                            <li><Link  href="index.html"><i className='bx bx-search'></i></Link></li>
                            <li><i className='bx bxs-user-detail'></i>
                                <ul className="dropdown">
                                    <li id="login-box"><Link href='/login'>Login</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/cart"><i className='bx bx-shopping-bag'></i></Link>
                            <span className="crt">6</span></li>
                            <a href="#" id="close"><i className='bx bx-x'></i></a>
                        </ul>
                    </div>
                    <div id="mobile">
                        <i id="bar" className='bx bx-menu'></i>
                    </div>
            </header>

            <nav className="categories">
                <span className="categories-name active">New In</span>
                <span className="categories-name">Designers</span>
                <span className="categories-name">Trending</span>
                <span className="categories-name">Clothing</span>
                <span className="categories-name">T-shirts</span>
                <span className="categories-name">Pants</span>
                <span className="categories-name">Accessories</span>
                <span className="categories-name">Bags</span>
                <span className="categories-name">Shoes</span>
                <span className="categories-name">Jewelry</span>
            </nav>
        </section>
    )
}