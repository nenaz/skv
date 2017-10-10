import React, { Component } from 'react'
import '../less/App.css';

export default class BlockRate extends Component {

    render() {
        return (
            <div curr={this.props.usd} typerate={this.props.typeOper} className={this.props.bgc_rgba}>
                <span className="ccCurImg currencyImg">{this.props.strUSD}</span>
            </div>
        );
    }
}