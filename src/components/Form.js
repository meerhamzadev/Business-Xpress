import React, { Component } from 'react';
import axios from 'axios'
import './cssFiles/Form.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ticker: [],
            companyName: []
        }
    }

    componentDidMount() {
        const url = `https://api-v2.intrinio.com/companies?api_key=OmIwY2U4MzFmMTkyNWQzZDViZGVkZGQxODVhZDljNjYz`;
        axios
            .get(url)
            .then(data => {
                let companyName = []
                let ticker = []

                for (let i = 0; i < data.data.companies.length; i++) {
                    companyName[i] = data.data.companies[i].name;
                    ticker[i] = data.data.companies[i].ticker;
                }

                this.setState({
                    companyName,
                    ticker
                })

            })

    }


    render() {
        let { companyName, ticker } = this.state;
        return (
            < >
                <form>
                    <select>
                        <option>
                            Choose the company
                            </option>

                        {ticker.map((tick, i) =>
                            <option key={i} onClick={this.props.res} >{`${tick} : ${companyName[i]}`}</option>
                        )}
                    </select>

                </form>

            </ >
        )
    }
}

export default Form
