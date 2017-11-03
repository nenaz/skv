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
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    inputChangeHandler = (e) => {
        this.props.changeInputValue(e.target.value)
    }

    handleButtonClick(e) {
        const me = this
        this.props.toggleLoader()
        setTimeout(() => {
            me.props.changePage(2)
        },640)
    }

    componentDidMount() {
        debugger
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

const mapDispatch = {changeInputValue, changePage, toggleLoader}

export default connect(mapStateToProps, mapDispatch)(CustomBlock)