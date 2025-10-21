"use client"
import CardSection from "../Products/CardSection"
import { useProductQuery } from "@/queries/products/product"
import useProductStore from "@/store/productStore"
import Footer from "../Layout/Footer"

export default function StoreComponent(){
    const page = useProductStore((state) => state.page)
    const {data, isLoading, isError} = useProductQuery(page)
    


    return(
        <>
        <div className="cat-name w-full flex item-start bg-white">
            <span className="goods-category text-[1.5rem] md:text-[2rem] useRomana">Men Everything</span>
        </div>

        <CardSection isLoading={isLoading}  isError={isError} products={data?.products} page={page} productCount={data?.productCount} count={data?.count}/>
        <Footer />
        </>
    )
}