import './galleries.scss';
import ImgGaller from '../../images/Galleries-1.png'
import ImgGaller2 from '../../images/Galleries-2.png'
import ImgGaller3 from '../../images/Galleries-3.png'
import ImgGaller4 from '../../images/Galleries-4.png'
import ImgGaller5 from '../../images/Galleries-5.png'
import ImgGaller6 from '../../images/Galleries-6.png'
import ImgGaller7 from '../../images/Galleries-7.png'
import ImgGaller8 from '../../images/Galleries-8.png'
import ImgGaller9 from '../../images/Galleries-9.png'
import ImgGaller10 from '../../images/Galleries-1.png'
import ImgGaller11 from '../../images/Galleries-4.png'
import ImgGaller12 from '../../images/Galleries-6.png'
import ImgGaller13 from '../../images/Galleries-8.png'

export default function Galleries() {
  return (
    <div className='galleries'>
        <div className="container">
            <div className="wrapper">
                <h2>Galleries</h2>
                <h2>Available Homes</h2>
                <p>a community that gives you a taste of happiness, 
                    a place you’ll love to live and an opportunity to build a home.</p>
                <div className="galleryWrap">
                    <img src={ImgGaller} alt="g" />
                    <img src={ImgGaller2} alt="g" />
                    <img src={ImgGaller3} alt="g" />
                    <img src={ImgGaller4} alt="g" />
                    <img src={ImgGaller5} alt="g" />
                    <img src={ImgGaller6} alt="g" />
                    <img src={ImgGaller7} alt="g" />
                    <img src={ImgGaller8} alt="g"  />
                    <img src={ImgGaller9} alt="g"/>
                    <img src={ImgGaller10} alt="g" className='hight' />
                    <img src={ImgGaller11} alt="g" className='hight' />
                    <img src={ImgGaller12} alt="g" className='hight' />
                    <img src={ImgGaller13} alt="g" className='hight' />
                </div>
            </div>
        </div>
    </div>
  )
}
