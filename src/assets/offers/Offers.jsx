import './offers.scss';

export default function Offers() {
    return (
        <div className='offers'>
            <div className="container">
                <div className="wrapper">
                    <h2>What Pineapple Land Offers</h2>
                    <h2>Pineapple Land Offers</h2>
                    <img className='resImg' src="src/images/responsev-img/offers.png" alt="" />
                    <div className="containerIcons">
                        <div className="wrapIcons">
                            <img src="src/images/icons/fluent_tree-eve.png" alt="" />
                            <p>Eco Friendly</p>
                        </div>
                        <div className="wrapIcons">
                            <img src="src/images/icons/network-eve.png" alt="" />
                            <p>Smart Homes</p>
                        </div>
                        <div className="wrapIcons">
                            <img src="src/images/icons/payments-eve.png" alt="" />
                            <p>Good Rates</p>
                        </div>
                        <div className="wrapIcons">
                                <img src="src/images/icons/services-eve.png" alt="" />
                                <p>Serviced <br /> Apartment</p>
                            </div>
                            <div className="wrapIcons">
                                <img src="src/images/icons/bytesize_lock-eve.png" alt="" />
                                <p>Private <br /> Security</p>
                            </div>
                            <div className="wrapIcons">
                                <img src="src/images/icons/emojione-eve.png" alt="" />
                                <p>27/7 <br /> Electricity</p>
                            </div>
                    </div>
                    <div className="contentWrap">
                        <div className="left">
                            <div className="imgWrap">
                                <img src="src/images/main-img-2.png" alt="" />
                            </div>
                            <div className="imgRight"></div>
                        </div>
                        <div className="right">
                            <div className="wrapIcons">
                                <img src="src/images/icons/fluent-tree.png" alt="" />
                                <p>Eco Friendly</p>
                            </div>
                            <div className="wrapIcons">
                                <img src="src/images/icons/network.png" alt="" />
                                <p>Smart Homes</p>
                            </div>
                            <div className="wrapIcons">
                                <img src="src/images/icons/payments.png" alt="" />
                                <p>Good Rates</p>
                            </div>
                        </div>
                    </div>
                    <div className="contentWrap">
                        <div className="right">
                            <div className="wrapIcons">
                                <img src="src/images/icons/services.png" alt="" />
                                <p>Serviced Apartment</p>
                            </div>
                            <div className="wrapIcons">
                                <img src="src/images/icons/bytesize_lock.png" alt="" />
                                <p>Private Security</p>
                            </div>
                            <div className="wrapIcons">
                                <img src="src/images/icons/emojione.png" alt="" />
                                <p>27/7 Electricity</p>
                            </div>
                        </div>
                        <div className="left">
                            <div className="imgRight"></div>
                            <div className="imgWrap">
                                <img src="src/images/main-img-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
