import { useState } from 'react';
import './about.scss';
import Img1 from "../../images/about-img.png"
import Img2 from "../../images/Galleries-1.png"
import Img3 from "../../images/Galleries-2.png"
import ImgArrow from "../../images/icons/arrow.png"
export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)
    }
    return (
        <div className='about'>
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <h2>About Pineapple Island</h2>
                    </div>
                    <div className="right">
                        <div className="sliderContiner">
                            <div className="imgSlider">
                                <div className="slideWrap" style={{ transform: `translateX(-${currentSlide * 38}vw)` }}>
                                    <div className="img">
                                        <img src={Img1} alt="about" />
                                    </div>
                                    <div className="img">
                                        <img src={Img2} alt="about" />
                                    </div>
                                    <div className="img">
                                        <img src={Img3} alt="about" />
                                    </div>
                                </div>
                                <img src={ImgArrow} alt="arrow" onClick={() => { handleClick("left") }} className='arrow left' />
                                <img src={ImgArrow} alt="arrow" onClick={() => { handleClick() }} className='arrow right' />
                            </div>
                            <div className="textWrapper">
                                <div className="text" style={{ transform: `translateY(-${currentSlide * 33}vw)` }}>
                                    <div>
                                        <p>
                                            Pineapple Island is the most sought-after
                                            community in Ibadan that values and puts the
                                            needs of their clients first. It is a territory with loft
                                            complexes that creates a country life and homely feeling that is integrated with industrial development.
                                            A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            Pineapple Island is the most sought-after
                                            community in Ibadan that values and puts the
                                            needs of their clients first. It is a territory with loft
                                            complexes that creates a country life and homely feeling that is integrated with industrial development.
                                            A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            Pineapple Island is the most sought-after
                                            community in Ibadan that values and puts the
                                            needs of their clients first. It is a territory with loft
                                            complexes that creates a country life and homely feeling that is integrated with industrial development.
                                            A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="rightHight">
                        <div className='slideWrap' style={{transform:`translateX(-${(currentSlide * 100)/3}%)`}}>
                            <div className="slide">
                                <div className='imgWrap'>
                                    <div></div>
                                    <img src={Img1} alt="about" />
                                </div>
                                <p>1Pineapple Island is the most sought-after  community in Ibadan that
                                    values and puts the needs of their clients first. It is a territory with loft
                                    complexes that creates a country life and homely feeling that is integrated with industrial development.
                                    A perfect, professional built  abode that gives you the true taste of beauty and happiness.</p>
                            </div>
                            <div className="slide">
                                <div className='imgWrap'>
                                    <div></div>
                                    <img src={Img2}alt="about" />
                                </div>
                                <p>2Pineapple Island is the most sought-after  community in Ibadan that
                                    values and puts the needs of their clients first. It is a territory with loft
                                    complexes that creates a country life and homely feeling that is integrated with industrial development.
                                    A perfect, professional built  abode that gives you the true taste of beauty and happiness.</p>
                            </div>
                            <div className="slide">
                                <div className='imgWrap'>
                                    <div></div>
                                    <img src={Img3} alt="about" />
                                </div>
                                <p>3Pineapple Island is the most sought-after  community in Ibadan that
                                    values and puts the needs of their clients first. It is a territory with loft
                                    complexes that creates a country life and homely feeling that is integrated with industrial development.
                                    A perfect, professional built  abode that gives you the true taste of beauty and happiness.</p>
                            </div>
                        </div>
                        <img src={ImgArrow} className='arrow left' alt="arrow" onClick={() => { handleClick("left") }} />
                        <img src={ImgArrow} className='arrow a-right' alt="arrow" onClick={() => { handleClick() }}  />
                    </div>
                </div>
            </div>
        </div>
    )
}
