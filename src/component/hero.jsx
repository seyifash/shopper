"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { products } from "@/app/product"

// Import different background images
import summerSale from "../assets/images/summer.jpg"
import freeGift from "../assets/images/free.jpg"
import newArrival from "../assets/images/store.jpg"

export default function HeroStore() {
  const discountedProduct = products.filter((p) => p.discount > 0)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Define your slides dynamically
  const slides = [
    ...(discountedProduct.length > 0
      ? [
          {
            title: "Our Summer Sale is Finally Here!",
            desc: `Up to ${Math.max(...discountedProduct.map((p) => p.discount))}% off selected items.`,
            btnText: "Shop Now",
            link: "/discounts",
            image: summerSale,
          },
        ]
      : []),
    {
      title: "Buy Items Worth ₦100,000 & Get a Free Gift 🎁",
      desc: "Exclusive offer for premium customers. Don’t miss out!",
      btnText: "Learn More",
      link: "/offers/free-gift",
      image: freeGift,
    },
    {
      title: "New Arrivals — Discover the Latest Trends!",
      desc: "Fresh collections just dropped. Shop now before they sell out.",
      btnText: "Shop Now",
      link: "/shop",
      image: newArrival,
    },
  ]

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative w-full h-[80vh] overflow-hidden" id="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            className="object-cover brightness-75"
            priority
          />

          {/* Overlay content */}
          <div className="heroin">
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].desc}</p>
            <button onClick={() => (window.location.href = slides[currentIndex].link)}>
              {slides[currentIndex].btnText}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-5 flex gap-3 justify-center w-full z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400/60"
            }`}
          ></div>
        ))}
      </div>
    </section>
  )
}
