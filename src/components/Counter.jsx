import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {

    handleIncrement = () => {
        console.log('incrementing')
        this.props.increment()
    }

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.handleIncrement}>Inc</button>
            </div>
        )
    }
}

export default connect((state) => ({
    counter: state.count
}), { increment })(Counter)