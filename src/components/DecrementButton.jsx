import React from "react";

const DecrementButton = (props) => {
    const decrement = () => {
      props.setCount(props.count - 1);
    };
  return (
    <button
      className="bg-white text-darkgrey text-3xl px-10 pb-2 rounded-lg shadow-md shadow-black hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      onClick={decrement}
    >
      -
    </button>
  );
};

export default DecrementButton;
