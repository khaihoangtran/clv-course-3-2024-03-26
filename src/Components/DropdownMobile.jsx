import React from 'react';

const DropdownMobile = ({ prop }) => {
  const { id, listItem, show } = prop;
  return (
    <div
      id={`${id}-mobile`}
      className={`w-full flex-col bg-primary md:hidden z-50 absolute top-8 left-0 border-white border-solid border ${show}`}>
      <span className="text-white underline text-lg p-4 hover:text-secondary hover:no-underline hover:cursor-pointer">
        Overview
      </span>
      <ul className="pl-6 pb-3 pr-6">
        {listItem.map((item, index) => (
          <li key={item} className="mb-3 hover:*:text-secondary">
            <a className="text-white text-base" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMobile;
