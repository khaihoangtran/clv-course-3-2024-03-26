import React from "react";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

export const Social = () => {
  return (
    <div className="social flex justify-center ">
      <a href="/" className="flex">
        <AiFillFacebook className="text-gray hover:text-[#40a9ff] text-5xl mx-3 md:my-auto" />
      </a>
      <a href="/" className="flex">
        <AiFillYoutube className="text-gray hover:text-[#ff4c4c] text-5xl mx-3 md:my-auto" />
      </a>
    </div>
  );
};
