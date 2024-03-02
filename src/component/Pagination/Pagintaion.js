import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, color, width }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5; // Show a fixed range of 5 pages

        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = startPage + maxPagesToShow - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
                    <button className="page-link" onClick={() => onPageChange(i)} style={{ backgroundColor: color, width: width }}>
                        {i}
                    </button>
                </li>
            );
        }
        return pageNumbers;
    };
    return (
        <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
                    Previous
                </button>
            </li>
            {renderPageNumbers()}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
