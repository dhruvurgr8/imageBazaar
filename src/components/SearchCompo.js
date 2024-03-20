import { useState } from "react";
import "./image.css";
const SearchCompo = ({ setPageNumber, searchQuery, setSearchQuery }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setPageNumber(1);
    setSearchQuery(value);
  };
  return (
    <>
      <div className="search-bar">
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="Search images..."
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
};
export default SearchCompo;
