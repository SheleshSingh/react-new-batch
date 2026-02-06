import React, { useEffect, useState } from "react";
import A from "./A";
import B from "./B";

const Api = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(10);
  //   useEffect(() => {
  //     console.log("hello emty");
  //   });

  useEffect(() => {
    console.log("count", count);
    console.log("total", total);
  }, [count, total]);

  return (
    <div>
      <A count={count} total={total} />
      <B setCount={setCount} count={count} />
      <button onClick={() => setTotal(total + 1)}>Total</button>
    </div>
  );
};

export default Api;
