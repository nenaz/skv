import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {

    handleIncrement = () => {
        console.log('incrementing')
        this.props.dispatchIncrement()
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

function mapStateToProps(state) {
    return {
        counter: state.count
    }
}

const mapToDispatch = {
    dispatchIncrement: increment
}

const decorator = connect(mapStateToProps, mapToDispatch)

export default decorator(Counter)
// export default connect(mapStateToProps)(Counter)