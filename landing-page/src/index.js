import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Jumbotron from './jumbotromp';
import Card from './card';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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
  )
}

ReactDOM.render(<App />, document.getElementById("root"));