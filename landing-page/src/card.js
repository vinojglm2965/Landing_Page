import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const cardContent = {
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
    url: "http://placehold.it/500x325",
    label: "Find Out More!"
}

function Card() {

    return (
        <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src= {cardContent.url} alt></img>
                    <div className="card-body">
                        <h4 className="card-title">{cardContent.title}</h4> 
                        <p className="card-text">{cardContent.text}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" className="btn btn-primary">{cardContent.label}</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src= {cardContent.url} alt></img>
                    <div className="card-body">
                        <h4 className="card-title">{cardContent.title}</h4> 
                        <p className="card-text">{cardContent.text}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" className="btn btn-primary">{cardContent.label}</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src= {cardContent.url} alt></img>
                    <div className="card-body">
                        <h4 className="card-title">{cardContent.title}</h4> 
                        <p className="card-text">{cardContent.text}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" className="btn btn-primary">{cardContent.label}</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src= {cardContent.url} alt></img>
                    <div className="card-body">
                        <h4 className="card-title">{cardContent.title}</h4> 
                        <p className="card-text">{cardContent.text}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" className="btn btn-primary">{cardContent.label}</a>
                    </div>
                </div>
            </div>

        </div>        
    )
}

export default Card;