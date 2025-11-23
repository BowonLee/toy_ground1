import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Details from './components/Details';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-black text-off-white selection:bg-blood-red selection:text-white">
      <Hero />
      <Story />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
