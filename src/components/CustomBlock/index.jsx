import React, { Component } from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import CustomInfoBlock from './CustomInfoBlock'
import {connect} from 'react-redux'
import {changeInputValue} from '../../AC'

class CustomBlock extends Component {
    constructor(props) {
        super(props)

        this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }

    inputChangeHandler = (e) => {
        this.props.changeInputValue(e.target.value)
    }

    render() {
        return (
            <div>
                <CustomInput inputChangeHandler={this.inputChangeHandler} />
                <CustomInfoBlock />
                <CustomButton />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatch = {changeInputValue}

export default connect(mapStateToProps, mapDispatch)(CustomBlock)