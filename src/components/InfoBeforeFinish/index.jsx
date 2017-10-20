import React, {Component} from 'react'

class InfoBlock extends Component {
    render() {
        return (
            <div id="block">
                <h3 className="dpSidebarAccountsHeader" id="dpDetails">Детали</h3>
                <div className="dpOperationBody">
                    <div className="dpOperationPartnerInfo">
                        <div className="dpOperationPartnerMoreInfo open">
                            <p className="aplly-company">Компания: <span>
                        ЗАО "Пропан-трейдинг"
                    </span></p>
                            <p className="apply-account-from">Со счета: <span>40702 810 3 0000 0010001</span></p>
                            <p className="apply-account-to">На счет: <span>40702 840 9 0000 0030003</span></p>
                            <p className="apply-amount"><span>Сумма списания: </span><span>96<span className="ccA2F RUB">,00 </span></span></p>
                        </div>
                    </div>
                </div>
                <h3 className="dpSidebarAccountsHeader dpDeatailsHint">Как только Вас устроит курс, нажмите на кнопку <span>Купить</span></h3>
                <div className="holdExpectation" >
                    <div className="dpMainSvgContainer"></div>
                    <div className="message-text-apply message-text-apply-1">
                        <span>Мы резервируем нужную сумму</span>
                    </div>
                    <div className="message-text-apply message-text-apply-2">
                        <span>Это может занять 2-3 минуты</span>
                        <div>Не закрывайте эту страницу</div>
                        <span>После этого Вы сможете осуществить операцию по самому подходящему курсу.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoBlock