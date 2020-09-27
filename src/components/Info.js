import React, { Component } from 'react';
import './cssFiles/Info.css';

class Info extends Component {

    render() {
        return (
            <React.Fragment>

                <div className="info-of-company">
                    <p>  Name:   {this.props.information.legal_name}</p>
                    <p> CEO:  {this.props.information.ceo}</p>
                    <p> Country:  {this.props.information.hq_country}</p>
                    <p> Category:  {this.props.information.industry_group}</p>
                    <p> Phone No:  {this.props.information.business_phone_no}</p>
                    <p> Address:  {this.props.information.business_address}</p>
                    <p> Employees:  {this.props.information.employees}</p>
                    <p> Url: <a href={`https://${this.props.information.company_url}`} target="blank">
                        {this.props.information.company_url} </a>
                    </p>

                </div>

            </React.Fragment >
        )
    }
}

export default Info
