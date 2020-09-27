import React, { Component } from 'react'
import Form from './Form';
import axios from 'axios';
import './cssFiles/Data.css'
import Info from './Info';

class Data extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            companyData: null
        }
        this.event = this.event.bind(this);
    }

    getData = e => {
        e.preventDefault();
        let ticker = e.target.value;
        ticker = ticker.slice(0, ticker.indexOf(' '));

        const url = `https://api-v2.intrinio.com/companies/${ticker}?api_key=OmIwY2U4MzFmMTkyNWQzZDViZGVkZGQxODVhZDljNjYz`;
        axios
            .get(url)
            .then(
                data => {
                    this.setState({
                        companyData: data,
                        loading: true
                    }
                    )
                }
            )
    }

    event() {
        let effect = document.getElementById('description');

        if (effect.style.display === "block")
            effect.style.display = "none";

        else
            effect.style.display = "block";
    }

    render() {
        let { companyData, loading } = this.state;
        return (
            <React.Fragment>

                <Form res={this.getData} />

                {loading ?
                    < >
                        <Info information={companyData.data} />
                        <div className="body">
                            <button onClick={this.event}>
                                Click here for a brief overview of the company
                            </button>
                        </div>
                        <div className="description-body">
                            <div id="description">
                                <p >
                                    {companyData.data.short_description}
                                </p>
                            </div>
                        </div>
                    </>
                    :
                    <h3> </h3>}

            </React.Fragment>
        )
    }
}
export default Data
