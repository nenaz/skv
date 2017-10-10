import React from 'react'

const CustomInput = (props) => {
    return (
        <ul className="">
            <li className="" data-accounts="100">
                <div className="swiper-wrapper" data-acct="40702810300000010001">
                    <div className="ccCustom-input swiper-slide swiper-slide-active">
                        <div className="ccInput-cnt ccStandalone-input">
                            <input id="ccWidget-vendor-search" value="" type="tel" pattern="[0-9]*" placeholder="Введите сумму списания" />
                        </div>
                        <span className="ccCurImg currencyImg ccInputImg"></span>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default CustomInput