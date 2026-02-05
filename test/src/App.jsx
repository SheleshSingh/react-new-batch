import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [count, setCount] = useState(100);
  const name = "Amit";
  const testing = () => {
    console.log("Hello Props");
  };
  return (
    <div className="h-screen">
      <Header count={count} />
      <Main
        amit={name}
        str="Rahul"
        arr={[2, 3, 45, 67, 89]}
        obj={{ name: "amit", age: 67 }}
        testing={testing}
        count={count}
        setCount={setCount}
      />
      <Footer />
    </div>
  );
};

export default App;
