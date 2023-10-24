import React from "react";
import "./App.css";
import Navbar from './Navbar';
import Home from './Home';
import Hero from './Hero';
import Post from './Post';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Hero/>
      <Post />
      <Footer />
    </div>
  );
}

export default App;
