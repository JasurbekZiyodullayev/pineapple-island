import './choose.scss'
import ImgChoose from '../../images/main-img-1.png'
import ImgChooseRe from '../../images/responsev-img/chooseRes.png'
import ImgChooseBack from '../../images/chooseBack.png'

export default function Choose() {
    return (
        <div className='choose' style={{backgroundImage: 'url(' + ImgChooseBack + ')'}}>
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <h2>Why Choose Pineapple Island</h2>
                    </div>
                    <div className="right">
                        <div className="textWrap">
                            <p>
                                Pineapple Island is the most sought-after
                                community in Ibadan that values and puts the
                                needs of their clients first. It is a territory with loft
                                complexes that creates a country life and homely feeling that is integrated with industrial development.
                                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                            </p>
                        </div>
                        <div className="imgWrap">
                            <img className='img' src={ImgChoose} alt="about" />
                            <img className='imgHight' src={ImgChooseRe} alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
