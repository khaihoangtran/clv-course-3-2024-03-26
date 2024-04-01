import React from 'react';

const Message = ({ prop }) => {
  const { message, author, position } = prop;
  return (
    <div className="mb-5 flex flex-col">
      <p className="text-3px text-base text-center md:text-left">"{message}"</p>
      <span className="text-secondary text-end font-bold">{author}</span>
      <span className="text-secondary text-end font-bold">{position}</span>
    </div>
  );
};

export default Message;
