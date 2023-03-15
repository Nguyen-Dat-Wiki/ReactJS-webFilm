import React from 'react'

import './footer.css'

import {Link} from 'react-router-dom'

import bg from '../../images/footer-bg.jpg';
import logo from '../../images/tmovie.png';


function Footer() {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo d-flex align-items-center">
                        <img src={logo} alt="logo"/>
                        <Link to="/" className='h2'>tMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/404">Home</Link>
                        <Link to="/404">Contact</Link>
                        <Link to="/404">Terms of services</Link>
                        <Link to="/404">About us</Link>
                    </div>

                    <div className="footer__content__menu">
                        <Link to="/404">Live</Link>
                        <Link to="/404">FAQ</Link>
                        <Link to="/404">Premium</Link>
                        <Link to="/404">Pravicy policy</Link>
                    </div>
                    
                    <div className="footer__content__menu">
                        <Link to="/404">You must watch</Link>
                        <Link to="/404">Recent release</Link>
                        <Link to="/404">Top IMBD</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
