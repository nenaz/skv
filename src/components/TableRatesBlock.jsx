import React from 'react'
import '../less/TableRatesBlock.css'

const TableRatesBlock = (props) => {
    return (
        <div className="ccCompanyAndAllRates">
            <h3 className="dpSidebarAccountsHeader">fsfsdfsd</h3>
            <div id="ccCurrency-rates-table-parent" className="ccPopup-currencyrates ccPopup-bg-white">
                <div id="currency-rates-table" className="cash-rates">
                    <ul className="columns _3 header">
                        <li>Курсы валют*</li>
                        <li>Купить</li>
                        <li>Продать</li>
                    </ul>
                    <ul className="columns _3 usd-group">
                        <li><span className="ccCurImg currencyImg usd icon-usd">Доллар</span></li>
                        <li curr="usd" typerate="sell" className="bgc-rgba usd-sell ">59,490</li>
                        <li curr="usd" typerate="buy" className="bgc-rgba usd-buy ">56,212</li>
                    </ul>
                    <ul className="columns _3 eur-group">
                        <li><span className="ccCurImg currencyImg eur icon-eur">Евро</span></li>
                        <li curr="eur" typerate="sell" className="bgc-rgba eur-sell ">58,702</li>
                        <li curr="eur" typerate="buy" className="bgc-rgba eur-buy ">57,303</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TableRatesBlock;