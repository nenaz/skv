import React, {Component} from 'react'
import styles from './css/Loader.css'
import {connect} from 'react-redux'

class Loader extends Component {
    render() {
        return (
            <div className={`${styles.loader} ${(this.props.toggleLoader) ? styles.active : ''}`}>
                <div style={{
                    opacity: .3,
                    backgroundColor: 'black',
                    height: '100%',
                }}></div>
                <div style={{
                    width: '400px',
                    height: '200px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: 'calc(50% - 100px)',
                    border: '1px solid #c8c8c8',
                    borderRadius: '10px',
                    display: 'flex',
                    left: 'calc(50% - 200px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                }}>
                    <span>Loading ...</span>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    toggleLoader: state.toggleLoader
}))(Loader)