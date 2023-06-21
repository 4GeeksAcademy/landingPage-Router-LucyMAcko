import React from "react";

const Card = (props) => {
    const {cardPict1, cardPict2, cardPict3, cardPict4} = props;
    
   return (
    <div className="row">
        <div className="col-3 mt-3 pe-3">
            <div className="card">
                <img src={cardPict1} className="card-img-top" alt="beach"/>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.textBody}</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
        <div className="col-3 mt-3 pe-3">
            <div className="card">
                <img src={cardPict2} className="card-img-top" alt="black_dog"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.textBody}</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
        <div className="col-3 mt-3 pe-3">
            <div className="card">
                <img src={cardPict3} className="card-img-top" alt="laptop"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.textBody}</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
        <div className="col-3 mt-3 ps-3">
            <div className="card">
                <img src={cardPict4} className="card-img-top" alt="book"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.textBody}</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
    </div>
   )
};

export default Card;