import Button from "./Button";
import useProductStore from "@/store/productStore";

export default function Pagination({ productCount, totalPages, resPerPage = 10 }) {
  const { page, setPage } = useProductStore();

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const start = (page - 1) * resPerPage + 1;
  const end = Math.min(page * resPerPage, productCount);

  return (
    <div className="flex flex-col items-center gap-3 py-6">
      {/* Info text */}
      <p className="text-sm text-gray-700">
        Showing <span className="font-semibold text-sm">{start}</span>–
        <span className="font-semibold  text-sm">{end}</span> of{" "}
        <span className="font-semibold  text-sm">{productCount}</span> products
        {" "} (Page {page} of {totalPages})
      </p>

      {/* Pagination buttons */}
      <div className="flex gap-4 items-center">
        <Button
          label="Prev"
          isType={false}
          className="pagBtn"
          loading={false}
          disabled={page === 1}
          onClick={handlePrev}
          variant="primary"
          size="sm"
        />

        <Button
          label="Next"
          isType={false}
          className="pagBtn"
          loading={false}
          onClick={handleNext}
          disabled={page === totalPages}
          variant="primary"
          size="sm"
        />
      </div>
    </div>
  );
}
