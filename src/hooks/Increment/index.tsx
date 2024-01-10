import React, { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className=" flex h-48 items-center justify-center gap-8">
      <button
        onClick={() => handleClickMinus()}
        className=" flex h-8 w-8 items-center justify-center bg-black text-white"
      >
        -
      </button>
      <label className="">{count}</label>
      <button
        onClick={() => handleClick()}
        className="flex h-8 w-8 items-center justify-center bg-black text-white"
      >
        +
      </button>
    </div>
  );
};

export default Increment;
