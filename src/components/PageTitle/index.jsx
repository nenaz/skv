import React, {Component} from 'react'
import styles from './css/PageTitle.css'
import {connect} from 'react-redux'
import {changePage} from '../../AC'

class PageTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftIconType: 'menu'
        }

        this.handleLeftIconClick = this.handleLeftIconClick.bind(this)
    }

    handleLeftIconClick() {
        if (this.props.page === 2) {
            this.props.changePage(1)
        } if (this.props.page === 3) {
            this.props.changePage(2)
        }
    }

    render() {
        return (
            <div className={styles["dpHeader"]}>
                <div className={styles["dpHeaderLeftColumn"]}>
                    <div className={`${styles["ccHeaderTitle"]} ${styles["ccTitleMainPage"]} ${styles["off"]}`}>
                        <span className={`${styles["dpMenuBtn"]} ${styles["notifications"]} ${styles["icon"]}`} onClick={this.handleLeftIconClick}>
                            <span className={styles["ccNotices"]}></span>
                            <span className={styles["dpNotices"]}>10</span>
                        </span>
                        <h1 className={`${styles["dpHeaderTitle"]} ${styles["ccHeaderTitle"]}`}>{this.props.title}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    page: state.changePage
}),{
    changePage
})(PageTitle)