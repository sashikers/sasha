import React from 'react';

const PortfolioItem = props => (
    <div className="card horizontal">
        <div className="card-image">
            <img className="portfolioScreenshot" src={props.screenshot} />
        </div>
        <div className="card-stacked">
            <div className="card-content">
                <span className="card-title">{props.name}</span>
                <p className="projectDescription">{props.description}</p>

            </div>
            <div className="card-action">
                <a className="cardLink" href={props.link} target="_blank">Link</a>
                <a className="cardLink" href={props.github} target="_blank">Github</a>
            
            </div>

        </div>
        

        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
    </div>
);

export default PortfolioItem;