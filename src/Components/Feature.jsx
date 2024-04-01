import React from 'react';

const Feature = ({ prop }) => {
  const { title, content } = prop;
  return (
    <div className="mb-4">
      <h3 className="text-primary text-2xl font-medium md:text-3xl mb-4 text-center md:text-left">
        {title}
      </h3>
      <p className="text-3px text-base md:text-lg text-center md:text-left">{content}</p>
    </div>
  );
};

export default Feature;
