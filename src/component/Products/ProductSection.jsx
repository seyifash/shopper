"use client"
import ProductCard from "./ProductCard"

export default function ProductSection({ title, subtitle, products }) {
  
  return (
    <section id="product1" className="section-p1">
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
      <div className="pro-container">
        {products.map((product) => (
          <ProductCard key={product._id || product.name} product={product} />
        ))}
      </div>
    </section>
  )
}
