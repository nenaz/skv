import React, {Component} from 'react'
import PageTitle from './PageTitle'
import SuccessBlock from './SuccessPage'
import styles from '../css/App.css'
import {connect} from 'react-redux'
import { toggleLoader } from '../AC'
import { 
    STATUSPENDING,
    STATUSSUCCESS,
    STATUSREJECTED
} from '../js/consts'
import RejectedBlock from './RejectedPage'

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
        // let statusPage = ''
        // switch (this.props.operStatus.status) {
        //     case STATUSSUCCESS: statusPage = <SuccessBlock />
        //         break;
        //     default: statusPage = <SuccessBlock />
        // }
        // return (
        //     <div className={`${styles.page3}`}>
        //         <PageTitle title="" />
        //         {statusPage}
        //     </div>
        // )
        return (
            <div className={`${styles.page3}`} >
                <div className={styles["success"]}>
                    <RejectedBlock />
                </div>
            </div>
        )
    }
}

export default connect(state => ({
  changePage: state.changePage,
  operStatus: state.operStatus
}), { toggleLoader })(Page3)