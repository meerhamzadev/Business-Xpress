import React, { Component } from 'react'
import icon from './css_images\\icon.svg'
import './cssFiles/navBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <img src={icon} alt="something went wrong" />
                <h1>Company Stats teller</h1>
            </div>
        )
    }
}

export default NavBar;