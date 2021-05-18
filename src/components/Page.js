import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Page.css';
class Page extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            // loading: false,
            offset: 0,
            perPage: 5,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    // componentDidMount = async () => {
    //     await fetch('https://finnhub.io/api/v1/news?category=general&token=bvo5brv48v6rbvarmnd0')
    //         .then(response => response.json())
    //         .then(data =>
    //             this.setState({
    //                 data,
    //                 loading: true
    //             }))
    // }
    getData() {
        axios
            .get(`https://finnhub.io/api/v1/news?category=general&token=bvo5brv48v6rbvarmnd0`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(dataObject => <React.Fragment>
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
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getData()
        });

    };
    render() {
        // let { loading, data } = this.state;
        // if (!loading) {
        //     return (<> </>)
        // }
        return (<>
            {this.state.postData}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </>)
    }
}

export default Page
