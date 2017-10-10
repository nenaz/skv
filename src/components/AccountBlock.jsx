import React from 'react';

const AccountBlock = (props) => {
    return (
        <ul className="dpSidebarAccountsList ccConvertAccountFrom" action="show-accounts-filter">
            <li className="ccSwiper-container swiper-container2 swiper-container-horizontal" data-accounts="100" initiator="0" data-curr-acct="RUB" data-acct-from="40807810900000000159" data-amount="100345345.09">
                <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide-active dpNoNameOrganisation ccSwiper-slide">
                        <h4 className="dpSidebarAccountSumm">100 345 345<small className="RUB"> 09 </small></h4>
                        <div className="dpSidebarAccountName" >
                            ПАО "Ежик в тумане"
                        </div>
                        <span className="dpSidebarAccountNumber  top">40807 810 9 0000 0000159</span>
                        <i className="icon-arrow-right"></i>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default AccountBlock;