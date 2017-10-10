import React from 'react'

const SelectCurrencyBlock = (props) => {
    return (
        <h3 className="dpSidebarAccountsHeader ccSidebarAccountsHeader">
            <span>Валюта и сумма операции</span>
            <ul className="dpTabButtons dpFilterSelector sbDirectionSelector ccTabCurrency ccCurrencyPage">
                <li className="selected" data-curr="rub">Рубли</li>
                <li className="" data-curr="usd">Доллары</li>
            </ul>
        </h3>
    )
}

export default SelectCurrencyBlock