import './feature.scss'

import ImgFeature from "../../images/feature-img.png"
import ImgFeature2 from "../../images/icons/check.png"
import ImgFeature3 from "../../images/feature-img-2.png"

export default function Feature() {
    return (
        <div className='feature'>
            <div className="container">
                <div className="wrapper">
                    <div className="contentWrap">
                        <div className="left">
                            <div className="imgWrap">
                                <img src={ImgFeature} alt="feature" />
                            </div>
                            <div className="imgRight"></div>
                        </div>
                        <div className="right">
                            <h2>Amazing Features</h2>
                            <div className="table">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f" />
                            </div>
                            <div className="table2">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f" />
                            </div>
                            <div className="table">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f"  />
                            </div>
                            <div className="table2">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f"  />
                            </div>
                            <div className="table">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f"  />
                            </div>
                            <div className="table2">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f"  />
                            </div>
                            <div className="table">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f"  />
                            </div>
                            <div className="table2">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f"  />
                            </div>
                            <div className="table">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f" />
                            </div>
                            <div className="table2">
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <img src={ImgFeature2} alt="f"  />
                            </div>
                        </div>
                    </div>
                    <div className="contentWrap2">
                        <div className="right">
                            <div>
                                <h2>Become an Agent</h2>
                                <p>
                                    a community that gives you a taste of happiness, a
                                    place you’ll love to live and an opportunity to build a home.
                                </p>
                                <button>Join Now</button>
                            </div>
                        </div>
                        <div className="left">
                            <div className="imgRight"></div>
                            <div className="imgWrap">
                                <img src={ImgFeature3} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
