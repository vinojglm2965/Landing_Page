import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Jumbotron() {
    return (
        <div className="jumbotron container">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    )
}

export default Jumbotron;