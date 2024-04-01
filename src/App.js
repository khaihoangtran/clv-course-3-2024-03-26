import React from 'react';
import Navbar from './Components/Navbar';
import Shipping from './Pages/Shipping';
import { Footer } from './Components/Footer';
import Customer from './Components/Customer';
import Navigation from './Components/Navigation';
const App = () => {
  return (
    <div>
      <Navbar />
      <Shipping />
      <Customer />
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
