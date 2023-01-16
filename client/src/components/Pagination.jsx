import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesToShow, setPagesToShow] = useState(5);
  const pageNumbers = [...Array(totalPages).keys()].map((x) => x + 1);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (newPage > currentPage) {
      if (newPage > pageNumbers.slice(-1)[0] - pagesToShow / 2) {
        setPagesToShow(pagesToShow + 2);
      }
    } else if (newPage < currentPage) {
      if (newPage < pageNumbers[0] + pagesToShow / 2) {
        setPagesToShow(pagesToShow - 2);
      }
    }
  };

  if (totalPages < 2) return null;

  return (
    <div className="pagination-container">
      <button
        className="btn btn-dark"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaAngleLeft size={20} />
      </button>
      <div className="page-numbers-container">
        <div
          key={pageNumbers[0]}
          className={`page-number ${
            currentPage === pageNumbers[0] ? "active" : ""
          }`}
          onClick={() => handlePageChange(pageNumbers[0])}
        >
          {pageNumbers[0]}
        </div>
        {currentPage > pageNumbers[0] + 1 && (
          <div className="page-number disabled">...</div>
        )}
        {pageNumbers
          .slice(
            currentPage - pagesToShow / 2 <= 0
              ? 1
              : currentPage - pagesToShow / 2,
            currentPage + pagesToShow / 2 >= totalPages
              ? totalPages - 1
              : currentPage + pagesToShow / 2
          )
          .map((pageNumber) => (
            <div
              key={pageNumber}
              className={`page-number ${
                currentPage === pageNumber ? "active" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </div>
          ))}
        {currentPage < pageNumbers.slice(-1)[0] - 1 && (
          <div className="page-number disabled">...</div>
        )}
        <div
          key={pageNumbers.slice(-1)[0]}
          className={`page-number ${
            currentPage === pageNumbers.slice(-1)[0] ? "active" : ""
          }`}
          onClick={() => handlePageChange(pageNumbers.slice(-1)[0])}
        >
          {pageNumbers.slice(-1)[0]}
        </div>
      </div>
      <button
        className="btn btn-dark"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaAngleRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
