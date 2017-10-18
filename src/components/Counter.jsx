import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from '../store'

class Counter extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {}

    //     this.handleIncrement = this.handleIncrement(this)
    // }

    handleIncrement() {
        console.log('incrementing')
        store.dispatch({
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