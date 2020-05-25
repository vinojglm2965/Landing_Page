import React from 'react';
import './App.css';
import Footer from './footer';
import Card from './card';
import Jumbotron from './jumotron';
import Navbar from './navbar';


function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Jumbotron/>
        <Card/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
