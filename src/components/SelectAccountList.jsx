import React, { Component } from 'react'

export default class SelectAccountList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <ul>
                {this.props.accontsList.map((item, key) => {
                    return <li></li>
                })}
            </ul>
        )
    }
}