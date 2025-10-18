"use client"
import Card from "./Card"

export default function CardSection({ isLoading,isError, title, products }) {
  return (
    <section id="product2" className="section-p1 w-full overflow-x-hidden">
      <h2>{title}</h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-2 w-full md:justify-between">
        {products?.map((product) => (
          <Card key={product._id || product.name} product={product} isLoading={isLoading} />
        ))}
      </div>
    </section>
  )
}
