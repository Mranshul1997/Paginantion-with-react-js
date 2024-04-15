import React, { useContext } from "react";
import "./Card.css";
import MyContext from "./MyContext";

function Card({ title, body, id }) {
  let [list, setlist] = useContext(MyContext);
  console.log(title, body, id);
  function handleClick() {
    const updatedList = list.filter((item) => item.id !== id);
    setlist(updatedList);
  }
  console.log(id, title, body);
  return (
    <>
      <div className="Card-box">
        <span className="cross" onClick={() => handleClick()}>
          X
        </span>
        <p>{id}</p>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </>
  );
}

export default Card;
