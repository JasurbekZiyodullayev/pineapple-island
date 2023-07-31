import { useState } from 'react';
import './header.scss';
import {Container } from './style';


export default function Header() {
  const [backImg, setBackIMg] = useState(0)
  return (
    <Container className='header' >
      <div className="container">
        <div className="wrapper">
          <div className="textWrap">
          
            <h2>Pineapple Island: <br />
              GenZ and Millenial
              Abode</h2>
            <p>a community that gives you a taste of happiness, a place you’ll
              love to live and an opportunity to build a home.</p>
            <button className='hightButton'>Get In Touch</button>
          </div>
        </div>
      </div>
    </Container>
  )
}
