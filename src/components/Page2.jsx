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

    selectClassName() {
        let name = ''
        if (this.props.changePage === 1) {
            name = 'right100'
        } else if (this.props.changePage === 3) {
            name = 'left100'
        }
        return name
    }

    render() {
        console.log('render page2')
        const name = this.selectClassName()
        return (
            <div className={`${styles.page2} ${styles[name]}`}>
              <PageTitle title="Выберите курс " />
              <OneRate />
              <InfoBeforeFinish />
            </div>
        )
    }
}

export default connect(state => ({
  changePage: state.changePage,
  wsConnect: state.wsConnect
}))(Page2)