import React, {Component} from 'react'
import styles from './css/PageTitle.css'
import {connect} from 'react-redux'
import {changePage} from '../../AC'
import {Link} from 'react-router-dom'

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
        var spanEL
        if (this.props.page === 2) {
            spanEL = 
                        <span className={`${styles["dpMenuBtn"]} ${styles["notifications"]} ${styles["icon"]}`} onClick={this.props.handleTitleButtonClick}>
                            <span className={styles["ccNotices"]}></span>
                            <span className={styles["dpNotices"]}>{this.props.page}</span>
                        </span>
                    
        }
        return (
            <div className={styles["dpHeader"]}>
                <div className={styles["dpHeaderLeftColumn"]}>
                    <div className={`${styles["ccHeaderTitle"]} ${styles["ccTitleMainPage"]} ${styles["off"]}`}>
                        {spanEL}
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