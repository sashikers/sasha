import React from 'react';

const PortfolioItem = props => (
    <div className="card">
        <div className="card-image">
            <img className="portfolioScreenshot" src={props.screenshot} />
            
        </div>
        <div className="card-content">
            <span className="card-title">{props.name}</span>
            <p className="projectDescription">{props.description}</p>
            
        </div>
        <div className="card-action">
            <a className="cardLink" href={props.link}>Link</a>
            <a className="cardLink" href={props.github}>Github</a>
        
        </div>


        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
    </div>
);

export default PortfolioItem;