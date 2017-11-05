import React, { Component } from 'react';
// import {Provider} from 'react-redux'
// import App from './App'
// import store from '../store'
import styles from '../css/Root.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (<ReactCSSTransitionGroup
            transitionName={{
                enter: styles['enter'],
                enterActive: styles['enter-active'],
                leave:  styles['leave'],
                leaveActive:  styles['leave-active'],
                appear:  styles['appear'],
                appearActive:  styles['appear-active']
            }}
            // transitionName='expamle'
            transitionAppear={true}
            transitionEnter={true}
            // transitionLeave={false}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={2500}
        >
            <h1 className={styles['h1cl']}>Fading at Initial Mount</h1>

        </ReactCSSTransitionGroup>
        )
    }
}

export default Root