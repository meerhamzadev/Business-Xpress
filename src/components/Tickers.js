import React, { Component } from 'react'
import axios from 'axios'
import './cssFiles/Ticker.css'
class Tickers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            company: [],
            loading: false
        }
    }
    componentDidMount() {
        const url = `https://api-v2.intrinio.com/companies?api_key=OmIwY2U4MzFmMTkyNWQzZDViZGVkZGQxODVhZDljNjYz`;
        axios
            .get(url)
            .then(
                data => {
                    let ticker = []
                    let company = []
                    for (let i = 0; i < data.data.companies.length; i++) {
                        ticker[i] = data.data.companies[i].ticker;
                        company[i] = data.data.companies[i].name;
                    }
                    this.setState({
                        data: ticker,
                        company: company,
                        loading: true
                    })
                }
            )
    }
    SymbolList = () => {
        let symbol = document.getElementById('symbols');
        let btn_txt = document.getElementById('buton');
        if (symbol.style.display === "block") {
            symbol.style.display = "none";
            btn_txt.innerHTML = "show";
        }
        else {
            symbol.style.display = "block";
            btn_txt.innerHTML = "hide";
        }
    }
    render() {
        let { company, data, loading } = this.state;
        if (!loading) {
            return <h1>loading...</h1>
        }
        return (
            <React.Fragment>
                <div className="top_symbol">
                    <h3> Click here to see list of available symbols</h3>
                    <button onClick={this.SymbolList} id="buton">Show</button>
                </div>
                <ul id='symbols'>
                    {data.map((tic, i) =>
                        <li key={tic} id="subsymbol">
                            {tic} : {company[i]}
                        </li>
                    )}
                </ul>
            </React.Fragment>
        )
    }
}

export default Tickers
