import React from "react";

const Jumbotron = (props) =>{
    return(
        <div className="card text-bg-light border-0 pt-5">
            <div className="card-body">
                <h1 className="card-title">{props.title}</h1>
                <p className="card-text bg-body-secondary fs-5">{props.description}</p>
                <a href="#" className="btn btn-primary mb-5">{props.buttonTitle}</a>
            </div>                        
        </div>
    );
};

export default Jumbotron;