import React from 'react'
import LayersIcon from '@mui/icons-material/Layers';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CodeIcon from '@mui/icons-material/Code';
import './Services.css'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="mainText">
            <span>What i would do for you</span>
            <h2>Our Services</h2>
        </div>

        <div className="serviceSection">
            <div className="serviceBox">
                <LaptopMacIcon className='serviceIcon'/>
                <h3>Web Development</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget arcu vitae neque semper fermentum hendrerit quis massa. Sed vel magna neque. Integer in velit ut neque fermentum congue in a justo. Quisque neque sapien, maximus sit amet tempus et, interdum nec est. Nulla facilisi. Quisque dapibus et nisl in convallis. Ut rutrum eget velit in aliquet. 
                </p>
                <div className='btnBox serviceBtn'>
                    <a href="" className="btn">Read more</a>
                </div>
            </div>
            <div className="serviceBox">
                <CodeIcon  className='serviceIcon'/>
                <h3>Web Development</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget arcu vitae neque semper fermentum hendrerit quis massa. Sed vel magna neque. Integer in velit ut neque fermentum congue in a justo. Quisque neque sapien, maximus sit amet tempus et, interdum nec est. Nulla facilisi. Quisque dapibus et nisl in convallis. Ut rutrum eget velit in aliquet. 
                </p>
                <div className='btnBox serviceBtn'>
                    <a href="" className="btn">Read more</a>
                </div>
            </div>
            <div className="serviceBox">
                <LayersIcon  className='serviceIcon'/>
                <h3>Web Development</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget arcu vitae neque semper fermentum hendrerit quis massa. Sed vel magna neque. Integer in velit ut neque fermentum congue in a justo. Quisque neque sapien, maximus sit amet tempus et, interdum nec est. Nulla facilisi. Quisque dapibus et nisl in convallis. Ut rutrum eget velit in aliquet. 
                </p>
                <div className='btnBox serviceBtn'>
                    <a href="" className="btn">Read more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services