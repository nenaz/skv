import React, {Component} from 'react'
import OneRate from './OneRate'
import InfoBeforeFinish from './InfoBeforeFinish'
import PageTitle from './PageTitle'
import styles from '../css/App.css'
import {connect} from 'react-redux'

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={`${styles.page2} ${styles[(this.props.changePage !== 2) ? "right100" : ""]}`}>
              <PageTitle title="Выберите курс " />
              <OneRate />
              <InfoBeforeFinish />
            </div>
        )
    }
}

export default connect(state => ({
  changePage: state.changePage,
}))(Page2)