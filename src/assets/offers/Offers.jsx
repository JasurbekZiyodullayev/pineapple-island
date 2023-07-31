import './offers.scss';
import ImgOffers from '../../images/responsev-img/offers.png'
import ImgOffers2 from '../../images/main-img-2.png'
import ImgOffers3 from '../../images/main-img-3.png'

import IconsOffers from '../../images/icons/fluent_tree-eve.png'
import IconsOffers2 from '../../images/icons/network-eve.png'
import IconsOffers3 from '../../images/icons/payments-eve.png'
import IconsOffers4 from '../../images/icons/services-eve.png'
import IconsOffers5 from '../../images/icons/bytesize_lock-eve.png'
import IconsOffers6 from '../../images/icons/emojione-eve.png'

import IconsOffers7 from '../../images/icons/fluent-tree.png'
import IconsOffers8 from '../../images/icons/network.png'
import IconsOffers9 from '../../images/icons/payments.png'
import IconsOffers10 from '../../images/icons/services.png'
import IconsOffers11 from '../../images/icons/bytesize_lock.png'
import IconsOffers12 from '../../images/icons/emojione.png'

export default function Offers() {
    return (
        <div className='offers'>
            <div className="container">
                <div className="wrapper">
                    <h2>What Pineapple Land Offers</h2>
                    <h2>Pineapple Land Offers</h2>
                    <img className='resImg' src={ImgOffers} alt="" />
                    <div className="containerIcons">
                        <div className="wrapIcons">
                            <img src={IconsOffers} alt="" />
                            <p>Eco Friendly</p>
                        </div>
                        <div className="wrapIcons">
                            <img src={IconsOffers2} alt="" />
                            <p>Smart Homes</p>
                        </div>
                        <div className="wrapIcons">
                            <img src={IconsOffers3} alt="" />
                            <p>Good Rates</p>
                        </div>
                        <div className="wrapIcons">
                                <img src={IconsOffers4} alt="" />
                                <p>Serviced <br /> Apartment</p>
                            </div>
                            <div className="wrapIcons">
                                <img src={IconsOffers5} alt="" />
                                <p>Private <br /> Security</p>
                            </div>
                            <div className="wrapIcons">
                                <img src={IconsOffers6} alt="" />
                                <p>27/7 <br /> Electricity</p>
                            </div>
                    </div>
                    <div className="contentWrap">
                        <div className="left">
                            <div className="imgWrap">
                                <img src={ImgOffers2} alt="" />
                            </div>
                            <div className="imgRight"></div>
                        </div>
                        <div className="right">
                            <div className="wrapIcons">
                                <img src={IconsOffers7} alt="" />
                                <p>Eco Friendly</p>
                            </div>
                            <div className="wrapIcons">
                                <img src={IconsOffers8} alt="" />
                                <p>Smart Homes</p>
                            </div>
                            <div className="wrapIcons">
                                <img src={IconsOffers9} alt="" />
                                <p>Good Rates</p>
                            </div>
                        </div>
                    </div>
                    <div className="contentWrap">
                        <div className="right">
                            <div className="wrapIcons">
                                <img src={IconsOffers10} alt="" />
                                <p>Serviced Apartment</p>
                            </div>
                            <div className="wrapIcons">
                                <img src={IconsOffers11} alt="" />
                                <p>Private Security</p>
                            </div>
                            <div className="wrapIcons">
                                <img src={IconsOffers12} alt="" />
                                <p>27/7 Electricity</p>
                            </div>
                        </div>
                        <div className="left">
                            <div className="imgRight"></div>
                            <div className="imgWrap">
                                <img src={ImgOffers3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
