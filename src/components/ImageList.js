import React from "react"; // Don't forget to import React when using JSX
import Data from "./data.js"; // Assuming data.js contains the data to be used
import "./image.css";

const ImageList = ({ data }) => {
  if (!data || !data.results || data.results.length === 0) {
    // Render a loading indicator or an error message if data is null or empty
    return <div>Loading...</div>; // You can customize this message as needed
  }
  return (
    <>
      <div className="image-container">
        {data.results.map((item, index) => (
          <>
            <img
              width={400}
              height={400}
              key={index}
              className="image"
              src={item.urls.regular}
              alt={`Image ${index}`}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default ImageList;
