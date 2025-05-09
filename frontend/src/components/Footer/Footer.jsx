import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>CÔNG TY</h2>
                <ul>
                    <li>Home</li>
                    <li>Về chúng tôi</li>
                    <li>Vận Chuyển</li>
                    <li>Chính sách</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>LIÊN HỆ</h2>
                <ul>
                    <li>+84936923716</li>
                    <li>traungo456@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025</p>
    </div>
  )
}

export default Footer
