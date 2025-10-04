import Image from "next/image"
import store from '../assets/images/store.jpg'

export default function HeroStore(){

    return(
        <section id="hero">
            <Image src={store} alt="Store Hero Banner" />
            <div className="heroin">
                <h2>Our Summer Sale is Finally Here!</h2>
                <p>70% off side wide</p>
                <button>Shop Now</button>
            </div>
        </section>
    )
}