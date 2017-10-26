import React, {Component} from 'react'
import PageTitle from './PageTitle'
import styles from '../css/App.css'
import {connect} from 'react-redux'

class Page3 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={`${styles.page3} ${styles[(this.props.changePage !== 3) ? "right100" : ""]}`}>
                <PageTitle title="" />
            </div>
        )
    }
}

export default connect(state => ({
  changePage: state.changePage,
}))(Page3)