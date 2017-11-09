import React, {Component} from 'react'
import PageTitle from './PageTitle'
import SuccessPage from './SuccessPage'
import styles from '../css/App.css'
import {connect} from 'react-redux'
import { toggleLoader } from '../AC'

class Page3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }

        this.handleClickSuccessButton = this.handleClickSuccessButton.bind(this)
    }

    handleClickSuccessButton() {
        this.props.toggleLoader()
    }

    componentDidMount() {
        const me = this
        setTimeout(() => {
            me.props.toggleLoader()
        }, 1200)
    }

    componentWillMount() {
        // this.setState({ name: 'right100' })
    }

    render() {
        return (
            <div className={`${styles.page3}`}>
                <PageTitle title="" />
                <SuccessPage />
            </div>
        )
    }
}

export default connect(state => ({
  changePage: state.changePage,
}), { toggleLoader })(Page3)