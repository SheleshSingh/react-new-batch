import React from "react";

const Card = (props) => {
  console.log(props.img);
  return (
    <div className="bg-amber-200 w-75 h-75 p-2 border-2 border-rose-500 rounded-2xl">
      <div className="w-full h-50">
        <img src={props.img} alt="" className="w-full rounded-2xl" />
      </div>
      <h1>{props.name}</h1>
      <p className="line-clamp-2">{props.details}</p>
    </div>
  );
};

export default Card;
