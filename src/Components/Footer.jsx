import React from "react";
import { Social } from "./Social";
import Contacts from "./Contact";

export const Footer = () => {
  return (
    <section className=" border-t-2 border-t-[#eaecef] ">
      <div className="container w-full max-[1024px]:max-w-4xl max-[1496px]:max-w-8xl py-6 md:py-10 m-auto flex flex-col md:flex-row-reverse md:justify-between ">
        <Contacts />
        <Social />
      </div>
    </section>
  );
};
