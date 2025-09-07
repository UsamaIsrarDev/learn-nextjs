import React from "react";

const FlexContainer = () => {
  return (
    <div className="flex rounded shadow-2xl bg-pink-100 m-4 px-4 gap-4">
      <div className="basis-1/3 p-4 my-4 rounded-xl shadow-xl bg-white">
        <h1 className="font-black text-3xl">Standard</h1>
        <h2 className="text-gray-500">Monthly Plan</h2>
        <h1 className="font-black text-2xl mt-4">$25</h1>
      </div>

      <div className="basis-1/3 p-4 my-4 bg-pink-600 rounded-xl shadow-xl">
        <h1 className="font-black text-3xl text-white">Popular</h1>
        <h2 className="text-pink-200">Monthly Plan</h2>
        <h1 className="font-black text-2xl text-white mt-4">$50</h1>
      </div>

      <div className="basis-1/3 p-4 my-4 rounded-xl shadow-xl bg-white">
        <h1 className="font-black text-3xl">Premium</h1>
        <h2 className="text-gray-500">Monthly Plan</h2>
        <h1 className="font-black text-2xl mt-4">$75</h1>
      </div>
    </div>
  );
};

export default FlexContainer;
