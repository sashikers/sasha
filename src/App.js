import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navpills from './components/navpills';
import Home from './components/pages/home';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';

class App extends Component {
  state = {
    currentPage: "Home",
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />; 
    } else {
      return <Home />;
    }
  }

  render() {
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
