import React from 'react';

const NavPage = ({ prop }) => {
  const { name, position, href, style } = prop;
  return (
    <div className={`mx-auto flex flex-col mb-5 md:my-auto ${style} `}>
      <a
        href={href}
        className="text-center text-sm md:text-base text-primary md:text-clip hover:text-[#40a9ff]">
        {position}
      </a>
      <a
        href={href}
        className="text-center text-2xl md:text-3xl text-[#3bc5e4] hover:text-[#40a9ff]">
        {name}
      </a>
    </div>
  );
};

export default NavPage;
