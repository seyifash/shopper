"use client"

import CardSection from "../Products/CardSection"
import { useProductQuery } from "@/queries/products/product"

export default function StoreComponent(){

    const {data: products, isLoading, isError} = useProductQuery()


    return(
        <>
        <div className="cat-name w-full flex item-start bg-white">
            <span className="goods-category text-[1.5rem] md:text-[2rem] useRomana">Men Everything</span>
        </div>

        <CardSection isLoading={isLoading}  isError={isError} products={products} />
        </>
    )
}