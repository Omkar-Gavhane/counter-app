import React, { useState } from "react";
import "./App.css";
import DecrementButton from "./components/DecrementButton";
import DisplayBoard from "./components/DisplayBoard";
import IncrementButton from "./components/IncrementButton";
import ResetButton from "./components/ResetButton";


function App() {
  const [count, setCount] = useState(0);
   const [showNotification, setShowNotification] = useState(false);
  // if (count < 0) {
  //   alert("Can't reduce below zero");
  //   setCount(0);
  // }
  if (count<0) {
    setShowNotification(true);
    setCount(0)
  }
  const closeNotification = () => setShowNotification(false);
  return (
    <div className="App h-full">
      <div className="AppHeader mx-auto text-3xl font-bold text-white bg-emerald_green my- py-5">
        Counter
      </div>
      <div className="md:container mx-auto flex flex-col justify-center items-center h-1/2">
        <DisplayBoard count={count} />
        <div className="flex justify-center m-5 gap-5">
          <DecrementButton count={count} setCount={setCount} />
          <IncrementButton count={count} setCount={setCount} />
        </div>
        <ResetButton setCount={setCount}/>
      </div>
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 px-6 pr-4 rounded-lg shadow-lg flex items-center space-x-3">
          <span className="font-bold">Error:</span>
          <span>You can't decrement below zero!</span>
          <button
            onClick={closeNotification}
            className="bg-transparent text-white p-2 rounded-full hover:bg-red-600"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
