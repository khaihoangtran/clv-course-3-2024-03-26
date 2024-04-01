import React from 'react';
import Feature from '../Components/Feature';
import { features, introduction } from '../Assets/Contents';
const Shipping = () => {
  return (
    <section className="container pt-20 md:pt-32 m-auto max-[1024px]:max-w-4xl max-[1496px]:max-w-8xl">
      <div className="grid md:grid-cols-2 md:gap-8">
        <iframe
          id="video"
          className="min-w-full min-h-full max-[328px]:w-full max-[768px]:w-full max-[768px]:h-80 max-[328px]:h-40"
          src="https://www.youtube.com/embed/rNjUDw5E6tY?autoplay=1&mute=1"
          title="CyberLogitec ONE final101818 1"
          allow="autoplay"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
        <div className="mt-5">
          <h1 className="text-4xl font-normal md:text-left text-center md:text-5xl text-primary justify-center">
            {introduction.title}
          </h1>
          <h2 className="text-4xl text-center md:text-left md:text-5xl text-secondary mb-4">
            {introduction.subTile}
          </h2>
          <p className="text-lg md:text-lg">{introduction.description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-4 pt-10">
        {features.map((item) => (
          <Feature
            prop={{
              title: item.title,
              content: item.content
            }}
            className="col-3"
          />
        ))}
      </div>
    </section>
  );
};

export default Shipping;
