import React, { Component } from 'react';
import './cssFiles/Form.css';

class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form onSubmit={this.props.res} className="output">
                        <input
                            placeholder="enter the symbol"
                            name="ticker"
                            className="getdata"
                        />
                        <button className="boton">submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Form
