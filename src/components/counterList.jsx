import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
  const initialState = [
    { id: 1, value: 0, name: "Ненужная вещь" },
    { id: 2, value: 4, name: "Ложка" },
    { id: 3, value: 0, name: "Вилка" },
    { id: 4, value: 0, name: "Тарелка" },
    { id: 5, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters((prevState) => prevState.filter((count) => count.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.map((count) =>
        count.id === id ? { ...count, value: count.value + 1 } : { ...count }
      )
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((count) =>
        count.id === id ? { ...count, value: count.value - 1 } : { ...count }
      )
    );
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CounterList;
