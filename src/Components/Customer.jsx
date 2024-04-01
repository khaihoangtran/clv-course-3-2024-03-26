import React from 'react';
import Message from './Message';
import { customers } from '../Assets/Contents';
const Customer = () => {
  return (
    <section className="container max-[1024px]:max-w-4xl max-[1496px]:max-w-8xl m-auto">
      <h2 className="text-secondary text-4xl text-center md:text-left py-6">From our customers</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {customers.map((item) => (
          <Message
            prop={{
              message: item.message,
              author: item.author,
              position: item.position
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Customer;
