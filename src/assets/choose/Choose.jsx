import './choose.scss'

export default function Choose() {
    return (
        <div className='choose'>
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
                            <img className='img' src="src/images/main-img-1.png" alt="about" />
                            <img className='imgHight' src="src/images/responsev-img/chooseRes.png" alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
