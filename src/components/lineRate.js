import React, { Component } from 'react'
import BlockRate from './BlockRate'

export default class LineRate extends Component {
    render() {
        return (
            <div>
                <BlockRate {...this.props}/>
            </div>
        );
    }
}