import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Order status</a></li>
                        <li><a href="#">Payment options</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow us</h4>
                    <ul>
                        <li><a href="#"><i className='bx bxl-instagram'></i> Instagram</a></li>
                        <li><a href="#"><i className='bx bxl-facebook-circle'></i> Facebook</a></li>
                        <li><a href="#"><i className='bx bxl-twitter'></i> Twitter</a></li>
                        <li><a href="#"><i className='bx bxl-youtube'></i> Youtube</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer