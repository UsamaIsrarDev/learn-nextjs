import React from "react";

export default function Review() {
  return (
    <div className="flex flex-col shadow-2xl m-6 w-72 rounded-xl mt-20 mx-auto bg-amber-400 p-8">
      <img
        // src="https://via.placeholder.com/150"
        src={"/next.svg"}
        alt="user avatar"
        className="rounded-full h-22 w-22 bg-gray-300 mb-6"
      />
      <div className="">
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          ducimus, amet corporis excepturi magni est sequi impedit repellendus
          at vel dolores molestiae dolor quaerat dolorem esse minus perferendis
          autem? Nesciunt.
        </p>
        <p className="text-2xl">Full Name</p>
      </div>
    </div>
  );
}
