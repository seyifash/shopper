"use client"
import React, {useState} from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function NewsLetter() {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const handleInputData = (value) => {
        setEmail(value)
    }

    const submitEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(email)
        setLoading(false)
    }

    return (
        <section id="newsletter" className="section-p1 section-m1"> 
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail upadates about our latest shop and <span>special offers</span></p>
                </div>
                <div className="form">
                    <Input type={"text"} placeholder={"Your email address"} value={email} onChange={handleInputData} />
                    <Button isType={false} size={"md"} variant={"primary"} loading={loading} className={"normal button"} label="Sign Up" onClick={submitEmail} />
                </div>
            </section>
    )
}