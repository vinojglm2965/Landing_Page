import React from 'react';
import ReactDOM from 'react-dom';
import * as Jumbotromp from './jumbotromp';
import * as Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
    
       return(
            <>
            <Navbar.Nav/>
            <div className= "container">
            <Jumbotromp.Jumbo/>
            </div>
            </>
       )
}

ReactDOM.render(<App />, document.getElementById("root"));