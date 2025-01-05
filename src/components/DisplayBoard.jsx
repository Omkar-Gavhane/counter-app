import React from "react";

const DisplayBoard = (props) => {
    
  return (
    <div className="flex justify-center items-center bg-lightgrey text-darkgrey font-bold text-8xl w-48 h-48 rounded-xl shadow-md shadow-black">
      <div>{props.count}</div>
    </div>
  );
};

export default DisplayBoard;
