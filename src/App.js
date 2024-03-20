import axios from "axios";
import { useEffect, useState } from "react";
import ImageList from "./components/ImageList";
import SearchCompo from "./components/SearchCompo";
import Pagination from "./components/Pagination";

function App() {
  const [data, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("books");
  useEffect(() => {
    (async function () {
      const response = await axios({
        url: `https://api.unsplash.com/search/photos?`,
        method: "GET",
        params: {
          page: pageNumber,
          query: searchQuery,
          client_id: "vcvJ9rWOI4mI4QJQ_kMAaD6hOccNZ720NSyf8SGqfas",
        },
      });
      setData(response.data);
    })();
  }, [pageNumber, searchQuery]);
  console.log(searchQuery);
  return (
    <>
      <SearchCompo
        setPageNumber={setPageNumber}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ImageList data={data} />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </>
  );
}

export default App;
