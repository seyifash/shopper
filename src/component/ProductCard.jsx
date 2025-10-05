"use client"
import Image from "next/image"

export default function ProductCard({ product }) {
  return (
    <div className="pro">
      <Image src={product.image} alt={product.name} width={300} height={300} />
      <div className="des">
        <span>{product.brand}</span>
        <h5>{product.name}</h5>
        <div className="Star">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="bx bxs-star"></i>
          ))}
        </div>
        <h4>₦{product.price}</h4>
      </div>
    </div>
  )
}
