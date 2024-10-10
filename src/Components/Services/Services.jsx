import React from 'react'
import LayersIcon from '@mui/icons-material/Layers';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CodeIcon from '@mui/icons-material/Code';
import './Services.css'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="mainText">
        <h2>SERVICES</h2>
            <span>What i would do for you.</span>
            
        </div>
        <div className="serviceSection">
            <div className="serviceBox">
                <LaptopMacIcon className='serviceIcon'/>
                <h3>Web Development</h3>
                <p>
                I develop modern web applications using HTML, CSS, and JavaScript, with a focus on React.js within the MERN stack (MongoDB, Express, React, Node.js).
                </p>
            </div>
            <div className="serviceBox">
                <CodeIcon  className='serviceIcon'/>
                <h3>Performance Optimization</h3>
                <p>
                I create websites optimized for high search engine rankings (SEO) and performance. By implementing best practices in SEO and speed optimization, I ensure faster load times, better user experiences, and improved visibility in search engines.
                </p>
                
            </div>
            <div className="serviceBox">
                <LayersIcon  className='serviceIcon'/>
                <h3>Web Development</h3>
                <p>
                I'm passionate about web development and eager to learn and grow with others. I offer training and consultation in front-end development and the MERN stack. While new to teaching, I'm excited to share what I know and help others. For now, I'm offering free sessions, and look forward to growing together through collaboration.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services