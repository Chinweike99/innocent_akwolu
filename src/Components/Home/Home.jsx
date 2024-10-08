import React from 'react'
import './Home.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { assets } from '../../assets/assets';
import Profile from '../ProfileImage/Profile';

const Home = () => {
  return (
    <div id='home' className='home'>
        <div className='homeContent'>
            <h1>Hi!, i'm Akwolu Innocent Chinweike</h1>
            <div className='changeText'>
                <h3>And i'm</h3>
                <h3>
                    <span className='word'>Frontend Developer</span>
                </h3>
            </div>

            <p>write briefly about you</p>

            <div className='infoBox'>
                <div className='emailInfo'>
                    <h5>Email</h5>
                    <span>chinweiketwitter@gmail.com</span>
                </div>
            </div>

            <div className="btnBox">
                <a href="#" className='btn'>Download cv </a>
                <a href="#" className="btn">Hire me</a>
            </div>

            <div className="socialsIcon">
                <a href="" className="socials"><FacebookIcon className="icon"/></a>
                <a href="" className="socials"><WhatsAppIcon /> </a>
                <a href="" className="socials"><XIcon /> </a>
                <a href="" className="socials"><LinkedInIcon /> </a>
            </div>

        </div>
    

        {/* <div className='profileImage'>
            <div className='imageBox'>
                <img src={assets.profileImage} alt="profile" />
            </div>
            <div className="liquidShape">
                <svg 
                    viewBox="0 0 600 600" 
                    xmlns="http://www.w3.org/2000/svg"
                    class="svgLiquidShape"
                >
                    <path fill="#12f7ff">
                        <animate 
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            values="
                                M437.8,321.3C466.3,384.7,426.8,453.8,377.8,477.9C328.8,502,270.3,480.2,207.1,473.2C144,466.3,76.3,474.1,45.1,432.1C13.9,390,19.1,298.1,74.7,238.1C130.3,178.1,236.2,150,312.7,191.4C389.3,232.9,409.3,257.9,437.8,321.3Z;
                                
                                M453.2,310.3C484.5,384.9,474.6,462.1,419.8,490.2C365.1,518.3,265.5,497.4,201.2,486.6C136.9,475.7,108,475,75.3,430.3C42.7,385.6,6.2,296.8,43.2,233.6C80.3,170.3,190.9,132.6,278.2,145.5C365.5,158.5,421.8,235.7,453.2,310.3Z;

                                M437.7,292.7C477.9,366.5,491.2,442.8,443.8,485.8C396.4,528.8,288.4,538.3,215.9,505.1C143.5,471.9,106.6,395,78.5,332.6C50.5,270.1,31.2,222.1,66.4,168.3C101.6,114.4,191.2,54.6,270.4,56.4C349.6,58.1,418.4,121,437.7,292.7Z;

                                M493.2,329.5C535.6,389.5,558.6,456.9,511.5,491.6C464.3,526.3,346.9,528.4,275.1,507.1C203.3,485.8,177.1,441,138.7,393.5C100.3,346,49.7,295.9,85.7,237.7C121.6,179.5,244.2,113.2,316.9,123.2C389.5,133.2,414.4,269.4,493.2,329.5Z;

                            
                            "
                        />
                    </path>
                </svg>
            </div>
            <div className="liquidShape">
                <svg 
                    viewBox="0 0 600 600" 
                    xmlns="http://www.w3.org/2000/svg"
                    class="svgLiquidShape"
                >
                    <path fill="#12f7ff">
                        <animate 
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            values="
                                M437.8,321.3C466.3,384.7,426.8,453.8,377.8,477.9C328.8,502,270.3,480.2,207.1,473.2C144,466.3,76.3,474.1,45.1,432.1C13.9,390,19.1,298.1,74.7,238.1C130.3,178.1,236.2,150,312.7,191.4C389.3,232.9,409.3,257.9,437.8,321.3Z;
                                
                                M453.2,310.3C484.5,384.9,474.6,462.1,419.8,490.2C365.1,518.3,265.5,497.4,201.2,486.6C136.9,475.7,108,475,75.3,430.3C42.7,385.6,6.2,296.8,43.2,233.6C80.3,170.3,190.9,132.6,278.2,145.5C365.5,158.5,421.8,235.7,453.2,310.3Z;

                                M437.7,292.7C477.9,366.5,491.2,442.8,443.8,485.8C396.4,528.8,288.4,538.3,215.9,505.1C143.5,471.9,106.6,395,78.5,332.6C50.5,270.1,31.2,222.1,66.4,168.3C101.6,114.4,191.2,54.6,270.4,56.4C349.6,58.1,418.4,121,437.7,292.7Z;

                                M493.2,329.5C535.6,389.5,558.6,456.9,511.5,491.6C464.3,526.3,346.9,528.4,275.1,507.1C203.3,485.8,177.1,441,138.7,393.5C100.3,346,49.7,295.9,85.7,237.7C121.6,179.5,244.2,113.2,316.9,123.2C389.5,133.2,414.4,269.4,493.2,329.5Z;

                            
                            "
                        />
                    </path>
                </svg>
            </div>
        </div> */}

        <Profile />

    </div>
  )
}

export default Home