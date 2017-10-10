import React from 'react';
import styles from '../css/HeaderTitle.css'

const HeadTitile = (props) => {
    return (
        <h3 className={styles.dpSidebarAccountsHeader}>{props.title}</h3>
    );
}
export default HeadTitile;