import React, { useState, useEffect } from 'react'
import './Footer.css'
import Person4Icon from '@mui/icons-material/Person4';

const Footer = () => {

    const [recentDate, setDate] = useState();

    const getDate = () => {
        const myDate = new Date().getFullYear();
        return setDate(myDate);
    }
    useEffect(()=>{
        getDate();
    })


  return (
    <div className='footer'>
        <div className="footerTop">
            <div className="footerTopLeft">
                <span>Innocent</span>
                <p>I am a frontend developer, from Nigeria with 2 years of epxperience</p>
            </div>

            <div className="footerTopRight">
                <div className="footerEmailInput">
                    <Person4Icon />
                    <input type="email" placeholder='Enter your email'/>
                </div>

                <div className="subscribe">
                    Subscribe
                </div>
            </div>
        </div>

        <hr />
            <div className="footerBottom">
                <p className="footerBottomLeft">©{recentDate} Akwolu Innocent. All rights reserved.</p>

                <div className="footerBottomRight">
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
    </div>
  )
}

export default Footer