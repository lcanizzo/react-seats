import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar sticky-top navbar-light  bg-light ">
                <a className="navbar-brand">Navbar: Class Sorting</a>
            </div>
        )
    }
}