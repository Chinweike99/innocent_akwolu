import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div id='header' className='mainHeader'>
        <div className='header'>
            <div className='logo'><span>Chin</span>weike</div>
            <ul className='navlist'>
                <li> <AnchorLink className="anchorLink" offset={200} href="#home">Home</AnchorLink> </li>
                <li>
                    <Link to={'/aboutme'}>
                        About
                    </Link>
                </li>

                <li> <AnchorLink className="anchorLink" offset={50} href="#services">Services</AnchorLink> </li>
                <li> <AnchorLink className="anchorLink" offset={50} href="#skills">Skills</AnchorLink> </li>
                <li> <AnchorLink className="anchorLink" offset={280} href="#portfolio">Projects</AnchorLink> </li>
                <li> <AnchorLink className="anchorLink" offset={50} href="#contact">Contact</AnchorLink> </li>
            </ul>

            {showDrop ? 
            <ul className='dropList'>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={200} href="#home">Home</AnchorLink> </li>
                <li onClick={()=>setShowDrop(false)}>
                    <Link to={'/aboutme'}>
                        About
                    </Link>
                </li>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={50} href="#services">Services</AnchorLink> </li>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={50} href="#skills">Skills</AnchorLink> </li>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={280} href="#portfolio">Projects</AnchorLink> </li>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={50} href="#contact">Contact</AnchorLink> </li>
            </ul>
            : null}

            <div className='menuIcon' onClick={()=>setShowDrop(!showDrop)}>
                <MenuIcon onClick={setShowDrop}/>
            </div>
        </div>
        
    </div>
  )
}

export default Header