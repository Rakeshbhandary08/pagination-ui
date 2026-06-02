import React from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Pagination = ({currentPage,noOfPages,handlePageChange,setCurrentPage}) => {
  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        className="page-number"
       onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaCircleArrowLeft />
      </button>
      {[...Array(noOfPages).keys()].map((n) => (
        <button
          className={`page-number  ${currentPage === n ? "active" : ""}`}
          onClick={() => handlePageChange(n)}
          key={n}
        >
          {n}
        </button>
      ))}
      <button
        className="page-number"
        disabled={currentPage === noOfPages - 1}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        <FaCircleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
