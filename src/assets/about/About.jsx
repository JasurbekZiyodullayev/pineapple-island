import { useState } from 'react';
import './about.scss';

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
                                        <img src="src/images/about-img.png" alt="about" />
                                    </div>
                                    <div className="img">
                                        <img src="src/images/Galleries-1.png" alt="about" />
                                    </div>
                                    <div className="img">
                                        <img src="src/images/Galleries-2.png" alt="about" />
                                    </div>
                                </div>
                                <img src="src/images/icons/arrow.png" alt="arrow" onClick={() => { handleClick("left") }} className='arrow left' />
                                <img src="src/images/icons/arrow.png" alt="arrow" onClick={() => { handleClick() }} className='arrow right' />
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
                                    <img src="src/images/about-img.png" alt="" />
                                </div>
                                <p>1Pineapple Island is the most sought-after  community in Ibadan that
                                    values and puts the needs of their clients first. It is a territory with loft
                                    complexes that creates a country life and homely feeling that is integrated with industrial development.
                                    A perfect, professional built  abode that gives you the true taste of beauty and happiness.</p>
                            </div>
                            <div className="slide">
                                <div className='imgWrap'>
                                    <div></div>
                                    <img src="src/images/about-img.png" alt="" />
                                </div>
                                <p>2Pineapple Island is the most sought-after  community in Ibadan that
                                    values and puts the needs of their clients first. It is a territory with loft
                                    complexes that creates a country life and homely feeling that is integrated with industrial development.
                                    A perfect, professional built  abode that gives you the true taste of beauty and happiness.</p>
                            </div>
                            <div className="slide">
                                <div className='imgWrap'>
                                    <div></div>
                                    <img src="src/images/about-img.png" alt="" />
                                </div>
                                <p>3Pineapple Island is the most sought-after  community in Ibadan that
                                    values and puts the needs of their clients first. It is a territory with loft
                                    complexes that creates a country life and homely feeling that is integrated with industrial development.
                                    A perfect, professional built  abode that gives you the true taste of beauty and happiness.</p>
                            </div>
                        </div>
                        <img src="src/images/icons/arrow.png" className='arrow left' alt="arrow" onClick={() => { handleClick("left") }} />
                        <img src="src/images/icons/arrow.png" className='arrow a-right' alt="arrow" onClick={() => { handleClick() }}  />
                    </div>
                </div>
            </div>
        </div>
    )
}
