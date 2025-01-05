import React from "react";

const ResetButton = (props) => {
    const reset = () =>{
        props.setCount(0);
    }
  return (
    <button
      className="bg-red-500 text-white text-xl px-10 py-2 rounded-lg font-bold shadow-md shadow-black hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      onClick={reset}
    >
      Reset
    </button>
  );
};

export default ResetButton;

