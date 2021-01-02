import React, { Component } from 'react'
import './Page.css';
class Page extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            loading: false
        }
    }

    componentDidMount = async () => {
        await fetch('https://finnhub.io/api/v1/news?category=general&token=bvo5brv48v6rbvarmnd0')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    data,
                    loading: true
                }))
    }

    render() {
        let { loading, data } = this.state;
        if (!loading) {
            return (<> </>)
        }

        return (
            <main>
                {
                    data.slice(0, 20).map(dataObject => (

                        <a href={dataObject.url}
                            target="_blank" rel="noopener noreferrer"
                            key={dataObject.id}
                            className="mainPage">

                            <div className="mainPageContent">
                                <h1 className="mainPageContent__headline">{dataObject.headline}</h1>
                                <h4 className="mainPageContent__description">{dataObject.summary}</h4>
                            </div>

                            <div className="mainPage__Img">
                                <img src={dataObject.image} alt="something went wrong" />
                            </div>

                        </a>

                    ))
                }
            </main>
        )
    }
}

export default Page
