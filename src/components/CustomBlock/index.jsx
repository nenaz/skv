import React, { Component } from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import CustomInfoBlock from './CustomInfoBlock'

export default class CustomBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

        this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }

    inputChangeHandler(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <CustomInput value={this.state.value} inputChangeHandler={this.inputChangeHandler} />
                <CustomInfoBlock value={this.state.value}/>
                <CustomButton />
            </div>
        )
    }
}