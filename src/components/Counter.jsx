import React, { Component } from 'react'
import {connect} from 'react-redux'

class Counter extends Component {

    handleIncrement = () => {
        console.log('incrementing')
        this.props.dispatch({
            type: 'INCREMENT'
        })
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

const decorator = connect(mapStateToProps)

export default decorator(Counter)
// export default connect(mapStateToProps)(Counter)