import React from "react";
import Input from "./Input";
import Button from "./Button";

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
            <section id="newsletter" className="section-p1 section-m1"> 
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail upadates about our latest shop and <span>special offers</span></p>
                </div>
                <div className="form">
                    <Input type={"text"} placeholder={"Your email address"} />
                    <Button isType={true} classname={"normal"} label="Sign Up" />
                </div>
            </section>
        </>
    )
}
