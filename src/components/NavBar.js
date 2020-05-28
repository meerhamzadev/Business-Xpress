import React, { Component } from 'react'
import icon from 'E:\\codes\\webfiles\\react\\economic-stats\\src\\components\\css_images\\icon.jpg'
import './cssFiles/navBar.css'
class NavBar extends Component {
    render() {
        return (
            <div className="id">
                <img src={icon} alt="something went wrong" className="icon" />
                <h1 className="heading">Stock Info teller</h1>
            </div>
        )
    }
}

export default NavBar
