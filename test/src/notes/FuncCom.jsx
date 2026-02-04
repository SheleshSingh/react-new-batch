import { useState } from "react";

const FuncCom = ({ data, test }) => {
    console.log(test, "test");
    
  const [name, setName] = useState("Amit");

  function sum(num, num2) {
    console.log(num, num2);
  }

  return (
    <h1>
      Functional components:{name} :{test} : {data}
    </h1>
  );
};
export default FuncCom;
