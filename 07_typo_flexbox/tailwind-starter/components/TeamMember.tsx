import React from "react";

export default function TeamMember() {
  return (
    <div className="m-12 flex items-center">
      <img
        // src="https://via.placeholder.com/150"
        src={"/next.svg"}
        alt="user avatar"
        className="rounded-full h-22 w-22 bg-gray-300"
      />
      <div className="ml-6">
        <p className="text-2xl font-bold">Full Name</p>
        <p className="text-lg">title</p>
      </div>
    </div>
  );
}
