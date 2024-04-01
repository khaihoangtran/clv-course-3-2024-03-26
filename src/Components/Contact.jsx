import React from "react";

const Contact = () => {
  return (
    <div className="contact flex flex-col md:flex-row  justify-center py-5 ">
      <a
        href="/"
        className="mx-auto hover:text-secondary text-sm font-bold transition-all pt-3 md:mx-4"
      >
        CONTACT US
      </a>
      <a
        href="/"
        className="mx-auto hover:text-secondary text-sm font-bold transition-all pt-3 md:mx-4"
      >
        JOIN US
      </a>
    </div>
  );
};

export default Contact;
