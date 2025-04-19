import { useState } from "react";


const Counter = () => {
    const[count,setCount]=useState(0);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Count: {count}</h1>
    <div className="flex gap-4 mt-2">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors"
      >
        Decrement
      </button>
      {
        count > 0 && (
          <button onClick={()=>setCount(0)} className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition-colors ">Reset</button>
        )
      }

    </div>
  </div>
  )
}

export default Counter