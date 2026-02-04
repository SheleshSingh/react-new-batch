import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    // <div className=" w-full bg-rose-400 p-3 flex gap-2 justify-between flex-wrap">
    <div className=" w-full bg-rose-400 p-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center">
      <Card
        img="https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
        name="Amit"
        details="Developer"
      />
      <Card
        img="https://plus.unsplash.com/premium_photo-1767952035856-69ffa36c1d83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
        name="Rahul"
        details="Developer"
      />
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

export default Main;
