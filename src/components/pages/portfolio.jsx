import React from 'react';
import PortfolioSeed from '../portfolio.json';
import PortfolioItem from '../portfolioItem';
import {PortfolioList} from '../portfolioList';

console.log("PortfolioSeed", PortfolioSeed);

class Portfolio extends React.Component {
    state = {
        list: PortfolioSeed,
    };

    render() {
        return(
            <div>
                <h4>Portfolio</h4>
                <PortfolioList>
                    {this.state.list.map(item => {
                        return (
                            <PortfolioItem 
                                key={item.name}
                                name={item.name}
                                github={item.github}
                                link={item.link}
                                description={item.description}
                                screenshot={item.screenshot}
                            />
                        );
                    })}
                </PortfolioList>

            </div>
        );
    };
};


// const Portfolio = () => (
//     <div>This is the Portfolio page

//     </div>
// );

export default Portfolio; 