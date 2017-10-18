import React from 'react'
import styles from './css/CustomInfoBlock.css'

const CustomInfoBlock = (props) => {
    return (
        <div className={styles.skvDescText}>
            <div className="SkvDescriptionLin1">На счёт будет зачислено 0<span className="ccA2F USD">,00 </span></div>
            <div className="SkvDescriptionLin2"> по курсу  58<span className="ccA2F RUB">,013 </span>  за 1  <span className="ccA2F USD"></span>*</div>
        </div>
    )
}

export default CustomInfoBlock