
import { Button } from '@mui/material';
import './navbar.scss';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import ImgNavbar from '../../images/icons/menu.png'


export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className='navbar'>
            <div className='container'>
                <div className="wrapper">
                    <a href="#" className="logo">Pineapple <br /> Island</a>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">What we do</a></li>
                        <li><a href="#">Project</a></li>
                    </ul>
                    <button>Get in Touch</button>
                    <div onClick={() => { setShowMenu(!showMenu) }} variant='contined' className='burgerWrap'>
                        <img src={ImgNavbar} className='burger' />
                    </div>
                </div>
                <ul className={showMenu ? 'menu showMenu' : 'menu'}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">What we do</a></li>
                    <li><a href="#">Project</a></li>
                </ul>
            </div>
        </div>
    )
}
