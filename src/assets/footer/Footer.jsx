import './footer.scss';
import ImgFooter from '../../images/icons/footerIcon.png'
import ImgFooterBack from '../../images/footerBack.png'

export default function Footer() {
    return (
        <div className='footer' style={{backgroundImage: 'url(' + ImgFooterBack + ')'}}>
            <div className="container">
                <div className="wrapper">
                    <div className="contentWrap">
                        <div className="left">          
                            <h3>Banana <br /> Island</h3>
                            <p>
                                a community that gives you a taste of happiness,
                                a place you’ll love to live and an opportunity to build a home.
                            </p>
                            <div className="hightContent">
                                <h2>Pineapple Island</h2>
                                <p>
                                    <span><img src={ImgFooter} alt="" /></span>
                                    Copyright 2021 Glowdsgn All Rights Reserved
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <h4>Follow up</h4>
                            <p>
                                Keep up with our newsletter to get
                                updates about projects and offers
                            </p>
                            <form>
                                <div>
                                    <input type="mail" placeholder='Email' />
                                    <span>Subscribe</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
