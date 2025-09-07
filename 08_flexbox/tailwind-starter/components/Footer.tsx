import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex m-4 p-10 shadow-2xl rounded-xl bg-blue-100">
      <div className="float-left">
        <Image src={"/next.svg"} alt="next logo" width={100} height={100} />
        <h2 className="text-xl font-bold">The Company Tagline</h2>
        <p>Hello World!</p>
      </div>

      <div className="flex justify-between space-x-1 ml-auto">
        <div>
          <h2>Quick Links</h2>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <h2>Social</h2>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
