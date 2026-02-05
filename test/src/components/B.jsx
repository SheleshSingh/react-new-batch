import React from "react";

const B = ({ setCount, count }) => {
  return (
    <div>
      <h1>B</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-amber-500 px-12 py-3 rounded-2xl active:scale-80 duration-500"
      >
        Plus+
      </button>
    </div>
  );
};

export default B;
