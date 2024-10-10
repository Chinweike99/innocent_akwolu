import React, { useRef } from 'react'
import './Contact.css'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
    const serviceId = process.env.REACT_APP_SERVICEID;
    const templateId = process.env.REACT_APP_TEMPLATEID;
    const publicKey = process.env.REACT_APP_PUBLICID;

    console.log(serviceId, templateId, publicKey)

    const notify = () => toast("Message Sucesful!");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(serviceId, templateId, form.current, publicKey)
          .then(
            () => {
              notify();
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          return form.current.reset();
      };

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

           <form ref={form} onSubmit={sendEmail} className="contactRight">
                <label htmlFor="">Your name</label>
                <input type="text"  placeholder='Enter your name' name="user_name" required/>

                <label htmlFor="">Your email</label>
                <input type="text" placeholder='Enter your email address' name="user_email" required/>

                <label htmlFor="">Write your message</label>
                <textarea required name="message" rows={"10"} placeholder='Enter your message'></textarea>

                <button type='submit' value="Send" className='contactSubmit' required>Submit</button>
           </form>
        </div>

    </div>
  )
}

export default Contact
