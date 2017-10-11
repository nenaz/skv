import React from 'react'
import HeadTitle from './HeadTitle'

const SelectCurrencyBlock = (props) => {
    return (
        <div>
            <HeadTitle title="Валюта и сумма операции" />
                <div className="dpTabButtons dpFilterSelector sbDirectionSelector ccTabCurrency ccCurrencyPage">
                    <div className="selected" data-curr="rub">Рубли</div>
                    <div className="" data-curr="usd">Доллары</div>
                </div>
        </div>
    )
}

export default SelectCurrencyBlock