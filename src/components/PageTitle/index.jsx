import React, {Component} from 'react'
import styles from './css/PageTitle.css'

class PageTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className={styles["dpHeader"]}>
                <div className={styles["dpHeaderShadow"]}></div>
                <div className={styles["dpHeaderLeftColumn"]}>
                    <div className={styles["dpHeaderTitleBlock"]}>
                        <div className={styles["ccHeadersBlock"]}>
                            <div className={`${styles["ccHeaderTitle"]} ${styles["ccTitleMainPage"]} ${styles["off"]}`}>
                                <span className={`${styles["dpMenuBtn ]} ${styles[notifications"]}`}>
                                    <span className={styles["ccNotices"]}></span>
                                <span className={styles["dpNotices"]}>10</span></span>
                                <h1 className={`${styles["dpHeaderTitle"]} ${styles["ccHeaderTitle"]}`}>{this.props.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["dpHeaderRightColumn"]}>
                    <span className={`${styles["dpMenuBtn"]} ${styles["dpBtn-portrait"]} ${styles["notifications"]}`}>
                        
                    <span className={styles["dpNotices"]}>10</span></span>
                    <div className={`${styles["dponoffswitch"]} ${styles["dponoffswitch-home"]}`}></div>
                </div>
            </div>
        )
    }
}

export default PageTitle