import React, { Component } from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import CustomInfoBlock from './CustomInfoBlock'
import {connect} from 'react-redux'
import {changeInputValue} from '../../AC'
import {changePage} from '../../AC'

class CustomBlock extends Component {
    constructor(props) {
        super(props)

        this.inputChangeHandler = this.inputChangeHandler.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    inputChangeHandler = (e) => {
        this.props.changeInputValue(e.target.value)
    }

    handleButtonClick(e) {
        this.props.changePage(2)
    }

    render() {
        return (
            <div>
                <CustomInput inputChangeHandler={this.inputChangeHandler} />
                <CustomInfoBlock rates={this.props.rates} />
                <CustomButton active={(this.props.inputValue) ? 'active' : ''} handleButtonClick={this.handleButtonClick}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatch = {changeInputValue, changePage}

export default connect(mapStateToProps, mapDispatch)(CustomBlock)