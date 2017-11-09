import React, { Component } from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import CustomInfoBlock from './CustomInfoBlock'
import {connect} from 'react-redux'
import {changeInputValue, changePage, toggleLoader} from '../../AC'

class CustomBlock extends Component {
    constructor(props) {
        super(props)

        this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }

    inputChangeHandler = (e) => {
        this.props.changeInputValue(e.target.value)
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <CustomInput inputChangeHandler={this.inputChangeHandler} />
                <CustomInfoBlock rates={this.props.rates} />
                <CustomButton active={(this.props.inputValue) ? 'active' : ''} handleButtonClick={this.props.handleButtonClick}/>
            </div>
        )
    }
}

export default connect(state => ({
    wsConnect: state.wsConnect,
    inputValue: state.inputValue
}), {
    changeInputValue, changePage, toggleLoader
})(CustomBlock)