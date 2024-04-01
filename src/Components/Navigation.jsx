import React from "react";
import NavPage from "./NavPage";
const Navigation = () => {
  return (
    <section className="container mb-5 mt-5 mx-auto max-[1024px]:max-w-4xl max-[1496px]:max-w-8xl">
      <div className="flex flex-col min-[480px]:flex-row md:flex-row">
        <NavPage
          className="md:ml-0"
          prop={{
            position: "Previous page",
            name: "Metaverse",
            href: "#metaverse",
            style: "min-[480px]:ml-0"
          }}
        />
        <NavPage
          prop={{
            position: "Next page",
            name: "Terminal",
            href: "#terminal",
            style: "min-[480px]:mr-0"
          }}
        />
      </div>
    </section>
  );
};

export default Navigation;
