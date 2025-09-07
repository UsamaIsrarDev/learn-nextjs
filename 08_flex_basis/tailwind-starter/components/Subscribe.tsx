import React from "react";

export default function Subscribe() {
  return (
    <div className="flex w-9/12 justify-center m-auto border-2 border-gray-100">
      <input
        type="text"
        placeholder="Email Address"
        className="flex flex-grow p-2 bg-white"
      />
      <button className="px-6 py-2 bg-blue-500 text-gray-200">Subscribe</button>
    </div>
  );
}
