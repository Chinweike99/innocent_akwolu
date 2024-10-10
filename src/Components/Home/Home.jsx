import React from 'react'
import './Home.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Profile from '../ProfileImage/Profile';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
  return (
    <div id='home' className='home'>
        <div className='homeContent'>
            <h1>Hello 👋!. </h1>
            <p>I’m Chinweike, a software developer from Nigeria. <br /> I specialize in front-end development but also have experience building full-stack web applications using the MERN stack...
            <Link to={"/aboutme"}>
                <span className='readmore'>read more</span>
            </Link>
            
            </p>

            <div className="btnBox">
                <a className='btn'>Download cv </a>
                <AnchorLink offset={50} href="#contact">
                    <a className="btn">Hire me</a>
                </AnchorLink>
            </div>

            <div className="socialsIcon">
                <a href="https://github.com/Chinweike99" target="_blank" className="socials"><GitHubIcon className="icon"/></a>

                <a href="https://wa.me/2349166330306" target="_blank" className="socials"><WhatsAppIcon /> </a>

                <a href="https://x.com/Chinwe_script" target="_blank" className="socials"><XIcon /> </a>

                <a href="https://www.linkedin.com/in/innocent-akwolu-5096a5238/" target="_blank" className="socials"><LinkedInIcon /> </a>
            </div>

        </div>

        <Profile />

    </div>
  )
}

export default Home