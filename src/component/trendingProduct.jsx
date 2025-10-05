'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ProductSection from './ProductSection'

// Local fallback data
import zara1 from '../assets/images/products/zara1.jpg'
import zara2 from '../assets/images/products/zara2.png'
import zara3 from '../assets/images/products/zara3.png'
import zara4 from '../assets/images/products/zara4.png'
import zara5 from '../assets/images/products/zara5.png'
import zara6 from '../assets/images/products/zara6.png'
import zara7 from '../assets/images/products/zara7.png'
import zara8 from '../assets/images/products/zara8.png'

const fallbackTrending = [
  { name: 'Boucle Textured Jacket', brand: 'Zara', price: 129, image: zara2 },
  { name: 'Textured Sweater', brand: 'Zara', price: 49.9, image: zara3 },
  { name: 'Belted Pants', brand: 'Zara', price: 69.9, image: zara4 },
  { name: 'Plaid Overshirt', brand: 'Zara', price: 69.9, image: zara1 },
  { name: 'Lightweight Wool Blend Sweater', brand: 'Zara', price: 69.9, image: zara5 },
  { name: 'Leather Penny Loafers', brand: 'Zara', price: 69.9, image: zara6 },
  { name: 'Herringbone Textured Jacket', brand: 'Zara', price: 69.9, image: zara7 },
  { name: 'Cropped plaid Jacket', brand: 'Zara', price: 69.9, image: zara8 },
]

export default function TrendingProducts() {
  const fetchTrendingProducts = async () => {
    const { data } = await axios.get('https://shopapi.buildeapp.org/api/v1/trending')
    return data.trending
  }

  const { data: trendingProducts, isLoading, isError } = useQuery({
    queryKey: ['trendingProducts'],
    queryFn: fetchTrendingProducts,
    retry: 1, // don't retry endlessly
  })

  // Decide what to render
  const productsToRender =
    !isLoading && trendingProducts && trendingProducts.length > 0
      ? trendingProducts.map((product) => ({
          name: product.name,
          brand: product.brandName,
          price: product.price,
          image: product.images?.[0]?.url || zara1, // fallback image
        }))
      : fallbackTrending

  if (isLoading)
    return <p className="text-center mt-10 text-gray-600">Loading trending products...</p>

  if (isError)
    console.warn('Failed to fetch trending products, using fallback data.')

  return (
    <ProductSection
      title="Trending Products"
      subtitle="Summer Collection — New Modern Design"
      products={fallbackTrending}
    />
  )
}
