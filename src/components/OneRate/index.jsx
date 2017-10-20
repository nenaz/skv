import React, {Component} from 'react'

class OneRateIndex extends Component {
    render(){
        return(
            <div className="big-title">
                <p className="apply-title">Вы покупаете доллары за рубли</p>
                <div className="apply-rate">
                    <div className="blockUpdateRate"><span className="neutral">6</span><span className="neutral">5</span><span className="neutral">,</span><span className="redRate">1</span><span className="redRate">9</span><span className="redRate">3</span><span className="neutral hidden">0</span><span className="neutral hidden">0</span><span className="neutral hidden">0</span></div>
                    <i className="neutral ccArrow dpIcons"></i>
                </div>
                <p className="apply-description description1">рублей за 1 доллар</p>
                <p className="apply-description description2"><span className="description2-text1">На счёт будет зачислено</span> <span className="description2-text2">1<span className="ccA2F USD">,47 </span></span></p>
            </div>
        )
    }
}

export default OneRateIndex