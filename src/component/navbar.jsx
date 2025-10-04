"use client";
import { useState, useMemo} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import countryList from "react-select-country-list";
import Select from "react-select";
import { countries } from "country-data";
import getSymbolFromCurrency from "currency-symbol-map";
import useCurrencyStore from "@/store/countryCurrency";
import useCartStore from "@/store/cartStore";


export default function NavBar() {
  const [navActive, setNavActive] = useState(false);
  const pathname = usePathname();
  const [showSelect, setShowSelect] = useState(false);
  const { country, currency, productWord} = useCurrencyStore();
  const setCountryAndCurrency = useCurrencyStore((state) => state.setCountryAndCurrency);
  const setProductKeyWord = useCurrencyStore((state) => state.setProductKeyWord);
  const [showSearch, setShowSearch] = useState(false);
  const { cartItems } = useCartStore();
  const cartCount = cartItems.length;

  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (value) => {
    const found = countries[value.value];
    const currencyCode = found?.currencies?.[0]; 
    const symbol = getSymbolFromCurrency(currencyCode);
    setCountryAndCurrency(value, symbol || currencyCode || "₦");
    setShowSelect(false); 
  };

  return (
    <header id="header">

      <div id="mobile" onClick={() => setNavActive(!navActive)}>
        <i className='bx bx-menu'></i>
      </div>
      <div className="all-head">
        <div className="name-des">
          <Link href="/"><span>Shoppers</span></Link>
          <span className="sm-des">Men Everything</span>
        </div>

        <nav className={`nav-bet ${navActive ? 'active' : '' }`}>
          <span id="close" onClick={() => setNavActive(false)}><i className='bx bx-x'></i></span>
          <ul className="navbar1">
            <li className={`${pathname === '/' ? 'active2' : ''}`}><Link href="/" >Shop All</Link></li>
            <li className={`${pathname === '/store' ? 'active2' : ''}`}><Link href="/store">New In</Link></li>
            <li className={`${pathname === '/blog' ? 'active2' : ''}`}><Link href="/blog">Our Blog</Link></li>
            <li className={`${pathname === '/about' ? 'active2' : ''}`}><Link href="/about" >Values</Link></li>
            <li className={`${pathname === '/contact' ? 'active2' : ''}`}><Link href="/contact" >Contact</Link></li>
          </ul>
        </nav>
      </div>

      <nav id="navbar">
        <ul className="ul">
          <li className="relative add-style">
            <span className="main-span"> 
              <span  className="con-span">COUNTRY | {country.label}</span> 
              <span className="value"> ({country.value}) {currency}</span> 
            </span>
            <a href="#"><i  onClick={() => setShowSelect((prev) => !prev)} className='bx bxs-chevron-down  cursor-pointer' ></i></a>
             {showSelect && (
              <div className="absolute top-full mt-2 right-0 z-50 w-48">
                <Select
                  options={options}
                  value={country}
                  onChange={changeHandler}
                  autoFocus
                  menuIsOpen
                  className="country-select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      background: "white",
                      border: "1px solid #ddd",
                      cursor: "pointer",
                    }),
                    menu: (base) => ({
                      ...base,
                      zIndex: 9999,
                    }),
                  }}
                />
              </div>
            )}
            </li>
          <li className="relative">
            <i 
              className='bx bx-search cursor-pointer'
              onClick={() => setShowSearch((prev) => !prev)}
            ></i>
            {showSearch && (
              <input
                type="text"
                placeholder="Search products..."
                className="absolute top-full mt-2 text-xs right-[-40px] md:right-0 bg-white border border-gray-300 h-[27px] lg:h-[35px] rounded-md px-[5px] py-[4px]  w-34 lg:w-56 shadow-lg focus:outline-none"
                autoFocus
                onChange={(e) => setProductKeyWord(e.target.value)}
                value={productWord}
              />
            )}
          </li>
          <li><a href="#"><i className='bx bx-user'></i></a></li>
          <li lassName="relative">
            <a href="#">
              <i className='bx bx-shopping-bag'></i>
               {cartCount > 0 && (
                  <span className="absolute cart-len -top-1 right-0 bg-red-500 text-white text-[3px] font-normal rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </a>
            </li>
        </ul>
        
      </nav>
    </header>
  );
}
