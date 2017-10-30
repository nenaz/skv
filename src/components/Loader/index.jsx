import React, {Component} from 'react'
import styles from './css/Loader.css'
import {connect} from 'react-redux'

class Loader extends Component {
    render() {
        return (
            <div className={`${styles.loader} ${(this.props.toggleLoader) ? styles.active : ''}`}></div>
        )
    }
}

export default connect(state => ({
    toggleLoader: state.toggleLoader
}))(Loader)