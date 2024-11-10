import React from 'react';
import './assets/style.css';
import Home from './components/Home'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      <link rel="stylesheet" href="../src/assets/style.css" />
      <title>Jeremy Website</title>
      <header>
        <a href="#" className="logo">Jeremy</a>
        <nav>
          <a href="#" className="active">Home</a>
        </nav>
      </header>
      <Home/>
      <Hero/>
      
    </div>
  );
};

export default App;
