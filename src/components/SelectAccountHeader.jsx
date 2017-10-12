import React from 'react'

const SelectAccountHeader = (props) => {
    return (
        <div className="sbFilterBody ccFilterNew">
            <div className="ccFilterNewTitle">
                <div className="ccHeaderTitleBlock">
                    <span className="ccCancelBtn" action="close-filter">Отменить</span>
                    <span className="ccFilterHeaderTitle">Со счета</span>
                </div>
            </div>
            <div className="sbFilterSubHeader sbFilterSubHeaderTop ccFilterAccountTitle">
                <span>ЗАО "Пропан-трейдинг"</span>
            </div>
        </div>
    )
}

export default SelectAccountHeader