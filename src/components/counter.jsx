import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  const formatCount = () => {
    return count === 0 ? "empty" : count;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };
  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const handelDecrement = () => {
    setCount((prevState) => prevState - 1);
  };
  const handelTagChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id));
  };
  const renderTags = () => {
    return tags.map((tag) => (
      <li
        key={tag}
        className="btn btn-primary btm-sm m2"
        onClick={() => handelTagChange(tag)}
      >
        {tag}
      </li>
    ));
  };
  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>;
  }
  return (
    <>
      <ul>{renderTags()}</ul>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handelDecrement}>
        -
      </button>
    </>
  );
};

export default Counter;
