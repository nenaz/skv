import React, { Component } from 'react'
import SelectAccountHeader from './SelectAccountHeader'
import SelectAccountBody from './SelectAccountBody'

export default class SelectAccountList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // accontsList: {}
        }
    }

    render() {
        console.log('render list')
        return (
            <div className="dpSidebar dpToggledBlock ccAccountAnimationIn">
                <SelectAccountHeader />
                <SelectAccountBody {...this.props}/>
            </div>
        )
    }
}
