import React from "react"; // Don't forget to import React when using JSX
import "./image.css";

const Pagination = ({ pageNumber, setPageNumber }) => {
  if (pageNumber < 1) {
    setPageNumber(10);
  }
  return (
    <>
      <div className="btn-wrapper">
        <button
          onClick={() => {
            setPageNumber((prev) => prev - 1); // Return prev - 1
          }}
        >
          Previous
        </button>
        <h3>{pageNumber}</h3>
        <button
          onClick={() => {
            setPageNumber((prev) => prev + 1); // Return prev + 1
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
