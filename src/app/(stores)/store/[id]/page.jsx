"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useSingleProductQuery } from "@/queries/products/product";
import useCurrencyStore from "@/store/countryCurrency";
import SingleNavBar from "@/component/Layout/singleNavBar";
import "../../../../constants/selected.css"; 

export default function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useSingleProductQuery(id);
  const currency = useCurrencyStore((state) => state.currency);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading product...
      </div>
    );

  if (isError || !data?.product)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load product 😔
      </div>
    );

  const product = data.product;

  return (
    <div className="main-content">
      {/* Navbar */}
      <SingleNavBar />

      {/*  Product info layout from your CSS */}
      <div className="product-info">
        {/* Left side - product images */}
        <div className="product-pics">
          <div className="largeview">
            <Image
              src={product.images?.[0]?.url || "/placeholder.png"}
              alt={product.name}
              width={500}
              height={500}
            />
          </div>

          <div className="small-view">
            {(product.images || []).slice(0, 4).map((img, i) => (
              <div
                key={i}
                className={`small-1 ${i === 0 ? "active" : ""}`}
              >
                <Image
                  src={img.url || "/placeholder.png"}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - info */}
        <div className="info">
          <div className="brandname">
            <span className="brand">{product.brandName || "Brand"}</span>
          </div>
          <div className="product-desc">{product.name}</div>
          <div className="price">
            {currency}
            {product.price}
          </div>

          <div className="product-color">
            <span className="col1 active">Color</span>
            <div className="color-button">
              {(product.colors || []).map((color) => (
                <span key={color} className="col1 col2">
                  • {color}
                </span>
              ))}
            </div>
          </div>

          <div className="size">
            <div className="size-name">
              <span className="col2 active">Size</span>
              <span className="col2">•</span>
              <span className="col2">EU</span>
            </div>
            <div className="size-btn">
              {(product.sizes || []).map((size) => (
                <div key={size} className="size-button">
                  {size}
                </div>
              ))}
            </div>
            <span className="size-info">Size guide</span>
          </div>

          <div className="add-cart">
            <div className="add-btn">
              <div className="add-cart-btn update-cart">
                <i className="bx bx-shopping-bag"></i> Add to cart
              </div>
              <div className="pop-up hide">Item Added ✓</div>
              <div className="favit">
                <i className="bx bx-heart"></i>
              </div>
            </div>

            <div className="delivery-info">
              <span className="del-info">
                <i className="bx bxs-truck"></i> Free delivery on orders over ₦50,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
