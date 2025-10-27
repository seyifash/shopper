"use client";

import Link from "next/link";
import { useState } from "react";
import "../../constants/selected.css";

export default function SingleNavBar() {
  const [activeCategory, setActiveCategory] = useState("Sale");

  return (
    <header className="head-bar">
      <nav className="nav-bar">
        <span className="business-name">shoppers</span>

        <div className="details">
          <div className="cart">
            <span className="envelope">
              <Link href="/cart">
                <i className="bx bx-envelope"></i>
              </Link>
            </span>
            <span className="cart-text">Cart</span>
            <div className="cart-update">
              <span className="cart-updates">6</span>
            </div>
          </div>

          <div className="favorites">
            <span className="fclass">
              <i className="bx bx-heart"></i>
            </span>
            <span className="fav-text">Favorites</span>
          </div>

          <div className="image">
            <span className="i-image">
              <i className="bx bxs-user-circle"></i>
            </span>
          </div>
        </div>
      </nav>

      <div className="category">
        {["Men", "Sports", "Brands", "New", "Sale"].map((cat) => (
          <span
            key={cat}
            className={`v-category ${cat === "Men" ? "v-category1" : ""} ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </span>
        ))}
      </div>
    </header>
  );
}
