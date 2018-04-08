import React from 'react';

const Navpills = props => (
    <nav>
        <a href="#" className="brand-logo">Sasha Bessonova</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li
                onClick={() => props.handlePageChange("Home")}
                className={props.currentPage === "Home" ? "active" : ""}
            >
                <a>Home</a>
            </li>
            <li
                onClick={() => props.handlePageChange("Portfolio")}
                className={props.currentPage === "Portfolio" ? "active" : ""}
            >
                <a>Portfolio</a>
            </li>
            <li
                onClick={() => props.handlePageChange("Contact")}
                className={props.currentPage === "Contact" ? "active" : ""}
            >
                <a>Contact</a>
            </li>
        </ul>
    </nav>
);

export default Navpills;