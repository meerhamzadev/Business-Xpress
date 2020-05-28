import React, { Component } from 'react';
import './cssFiles/Info.css';

class Info extends Component {

    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:  {this.props.info.legal_name}</td>
                            <td>CEO:  {this.props.info.ceo}</td>
                            <td>Country:  {this.props.info.hq_country}</td>
                            <td>Category:  {this.props.info.industry_group}</td>
                            <td>Phone No:  {this.props.info.business_phone_no}</td>
                            <td>Adress:  {this.props.info.business_address}</td>
                            <td>Employees:  {this.props.info.employees}</td>
                            <td>Url:
                                <a href={`https://${this.props.info.company_url}`} target="blank">
                                    {this.props.info.company_url} </a>
                            </td>
                        </tr>
                    </tbody>
                </table >
            </React.Fragment >
        )
    }
}

export default Info
