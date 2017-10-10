import React from 'react';
import styles from '../less/HeaderTitle.css'

const HeadTitile = (props) => {
    return (
        <h3 className="dpSidebarAccountsHeader">{props.title}</h3>
    );
}
export default HeadTitile;