import React, { Component } from 'react'
// import $ from 'E:\\codes\\webfiles\\react\\economic-stats\\src\\loader.js';
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
        let ticker = e.target.ticker.value;
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
        let btn_txt = document.getElementById('butn');
        let effect = document.getElementById('discp');
        if (effect.style.display === "block") {
            effect.style.display = "none";
            btn_txt.innerHTML = "show";
        }
        else {
            effect.style.display = "block";
            btn_txt.innerHTML = "hide";
        }
    }
    render() {
        let { companyData, loading } = this.state;
        return (
            <React.Fragment>
                <Form res={this.getData} />
                {loading ?
                    <div className="body">
                        <Info info={companyData.data} />
                        <h3>Short Description of company</h3>
                        <button onClick={this.event} id="butn">
                            Show
                            </button>
                        <p id="discp">
                            {companyData.data.short_description}
                        </p>
                    </div> :
                    <h3>Nothing to show for instance...</h3>}

            </React.Fragment>
        )
    }
}
export default Data
