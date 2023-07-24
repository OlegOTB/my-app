import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCouters] = useState(initialState);
  const handelDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCouters(newCounters);
  };
  const handleIncrement = (id) => {
    setCouters((prevState) => {
      const buff = [...prevState];
      const index = buff.findIndex((item) => item.id === id);
      buff[index].value++;
      return buff;
    });
  };
  const handelDecrement = (id) => {
    setCouters((prevState) => {
      const buff = [...prevState];
      const index = buff.findIndex((item) => item.id === id);
      buff[index].value--;
      return buff;
    });
  };
  const handleReset = () => {
    setCouters(initialState);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handelDelete}
          onIncrement={handleIncrement}
          onDecrement={handelDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
