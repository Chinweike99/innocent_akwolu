import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='aboutMe'>
            <img src={assets.profileImage} alt="" />
            <div className='experience1'>
                <span>2+</span>
                <p>Years of Experience</p>
            </div>

            <div className='experience2'>
                <span>2+</span>
                <p>Years of Experience</p>
            </div>

            <div className='experience3'>
                <span>2+</span>
                <p>Years of Experience</p>
            </div>
       </div>

       <div className='aboutContent'>
            <h3>About me</h3>
            <h4>Brief about me</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget arcu vitae neque semper fermentum hendrerit quis massa. Sed vel magna neque. Integer in velit ut neque fermentum congue in a justo. Quisque neque sapien, maximus sit amet tempus et, interdum nec est. Nulla facilisi. Quisque dapibus et nisl in convallis. Ut rutrum eget velit in aliquet. </p>

            <div className='btnBox'>
                <Link to={"/aboutme"} target='_blank'>
                    <a className="btn"> Read More</a>
                </Link>
                
            </div>
       </div>
    </div>
  )
}

export default About