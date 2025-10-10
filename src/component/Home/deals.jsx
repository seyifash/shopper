import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Deals(){

    return(
        <>
            <section id="sm-banner" className="section-p1">
            <div className="banner-box">
                <h4>crazy deals</h4>
                <h2>buy 1 get 1 free</h2>
                <span>The best classic shirt and pant is on sale at shoppers</span>
                <button className="white">Learn More</button>
            </div>
            <div className="banner-box banner-box2">
                <h4>spring/summer</h4>
                <h2>upcoming season</h2>
                <span>The best classic shirt and pant is on sale at shoppers</span>
                <button className="white">Collection</button>
            </div>
            </section>
            <section id="banner3">
                <div className="banner-box">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
                <div className="banner-box banner-box2">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
                <div className="banner-box banner-box3">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
            </section>
        </>
    )
}
