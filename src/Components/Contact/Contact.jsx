import React from 'react'
import './Contact.css'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';


const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="mainText">
            <span>Ask me a question</span>
            <h2>Get in touch</h2>
        </div>

        <div className="contactSection">
            <div className="contactLeft">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact me anytime..</p>
                <div className="contactDetails">
                    <div className="contactDeta">
                        <AlternateEmailOutlinedIcon  className='icon'/>
                        <p>chinweiketwitter@gmail.com</p>
                    </div>

                    <div className="contactDeta">
                        <RoomOutlinedIcon className='icon'/>
                        <p>Lagos, Nigeria</p>
                    </div>
                    <div className="contactDeta">
                        <LocalPhoneOutlinedIcon className='icon'/>
                        <p>+234 9166330306</p>
                    </div>
                </div>
            </div>

           <form className="contactRight">
                <label htmlFor="">Your name</label>
                <input type="text"  placeholder='Enter your name' name='name'/>

                <label htmlFor="">Your email</label>
                <input type="text" placeholder='Enter your email address' name='email'/>

                <label htmlFor="">Write your message</label>
                <textarea name="message" rows={"10"} placeholder='Enter your message'></textarea>

                <button type='submit' className='contactSubmit'>Submit</button>
           </form>
        </div>


    </div>
  )
}

export default Contact
