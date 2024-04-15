import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import MyContext from "./MyContext.jsx";

function App() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      // console.log(data)
      setList(data);
      const numPages = Math.ceil(data.length / 6);
      setPages(new Array(numPages).fill(null));
    }
    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="Container">
        <MyContext.Provider value={[list, setList]}>
          {list
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((item, index) => (
              <Card
                id={item.id}
                key={index}
                title={item.title}
                body={item.body}
              />
            ))}
        </MyContext.Provider>
      </div>

      <div className="Paginantion">
        {pages.map((_, index) => (
          <span key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
