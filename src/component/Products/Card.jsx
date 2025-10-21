"use client";

import Image from "next/image";
import useCurrencyStore from "@/store/countryCurrency";
import Link from "next/link";


export default function Card({ product}) {
  const currency = useCurrencyStore((state) => state.currency);


  return (
    <div className="pro w-[40%] min-w-[150px] md:w-[23%] md:min-w-[250px] border border-[#f1f0f0] rounded-md relative p-2">
      <Image
        src={product.images[0].url}
        alt={product.name}
        width={300}
        height={300}
        className="w-full rounded-sm"
      />

      <div className="des text-start">
        <span className="text-[#606063] text-base font-semibold">
          {product.brandName}
        </span>
        <h5 className="text-[#1a1a1a] text-[12px] font-light">{product.name}</h5>
        <div className="flex flex-col">
          <h3 className="text-[0.8rem] md:text-[14px] font-bold text-black mb">
            {currency}
            {product.price}
          </h3>
          <Link
            href={`/store/${product.id}`}
            className="cart max-w-[90px] md:absolute bottom-[14px] right-[14px] text-[0.7rem] md:text-[12px] rounded-md bg-black text-[#f1f1fa] border border-[#e1e1f8]"
          >
            View Item
          </Link>
        </div>
      </div>
    </div>
  );
}
