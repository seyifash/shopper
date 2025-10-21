"use client";
import Pagination from "../common/pagination";
import Card from "./Card";
import Skeleton from "../common/Skeleton";
import { Colors } from "@/constants/colors";

export default function CardSection({
  isLoading,
  isError,
  title,
  products,
  productCount,
  count,
}) {
  const resPerPage = 10;
  const totalPages = Math.ceil(productCount / resPerPage);

  const showSkeletons = isLoading || isError || !products?.length;
  console.log(isError)

  return (
    <section
      id="product2"
      className="section-p1 w-full overflow-x-hidden min-h-[100vh]"
    >
      <h2>{title}</h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-2 w-full md:justify-between">
        {showSkeletons
          ? // 🔹 Show 8 skeleton placeholder cards
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="pro w-[23%] min-w-[250px] border border-[#f1f0f0] rounded-md p-2"
              >
                <Skeleton height="250px" rounded="md" className="w-full mb" />
                <div className="space-y-2 mb" >
                  <Skeleton width="60%" height="1rem" className="mb" />
                  <Skeleton width="80%" height="0.9rem" className="mb"/>
                  <Skeleton width="40%" height="1rem"  className="mb"/>
                </div>
              </div>
            ))
          : // 🔹 Show real products once loaded
            products?.map((product) => (
              <Card
                key={product._id || product.name}
                product={product}
                isLoading={isLoading}
                isError={isError}
              />
            ))}
      </div>

      {/* Optional: show message when offline or error */}
      {isError && (
        <p className="text-center text-gray-500 text-sm pd w-full">
          Failed to load products. Please check your internet connection.
        </p>
      )}

      {/* Pagination */}
      {productCount > 0 && !isError && (
        <Pagination
          resPerPage={8}
          totalPages={totalPages}
          productCount={productCount}
        />
      )}
    </section>
  );
}
