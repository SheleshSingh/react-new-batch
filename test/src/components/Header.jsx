import React from "react";

const Header = () => {
  return (
    // <div className="h-[10%] w-full bg-amber-400 text-3xl font-semibold flex items-center justify-center">
    <div className="h-[10%] w-full bg-amber-400 text-3xl font-semibold flex items-center justify-between px-5">
      <h1>Logo</h1>
      <div className="flex gap-3">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Service</h3>
      </div>
    </div>
  );
};

export default Header;
