import React from "react";

const Dropdown = ({ prop }) => {
  const { id, listItem } = prop;
  return (
    <div
      id={id}
      className="dropdown bg-primary hidden z-50 absolute top-8 left-0 border-white border-solid border"
    >
      <span className="text-white underline p-2 hover:text-secondary hover:no-underline hover:cursor-pointer">
        Overview
      </span>
      <ul className="pl-6 py-3 pr-2">
        {listItem.map((item, index) => (
          <li key={index} className="mb-3 hover:*:text-secondary">
            <a className="text-white text-xs" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
