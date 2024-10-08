import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Header = () => {

  const [showDrop, setShowDrop] = useState(false);

  // const handleDrop = () => {
  //   setShowDrop(!showDrop)
  // }

  return (
    <div id='header' className='mainHeader'>
        <div className='header'>
            <div className='logo'><span>Inno</span>cent</div>
            <ul className='navlist'>
                <li> <AnchorLink className="anchorLink" offset={200} href="#home"><a>Home</a></AnchorLink> </li>
                <li> <AnchorLink className="anchorLink" offset={50} href="#about"><a >About</a></AnchorLink> </li>
                <li> <AnchorLink className="anchorLink" offset={50} href="#services"><a >Services</a></AnchorLink> </li>
                <li> <AnchorLink className="anchorLink" offset={50} href="#skills"><a>Skills</a></AnchorLink> </li>
                <li> <AnchorLink className="anchorLink" offset={280} href="#portfolio"><a>Portfolio</a></AnchorLink> </li>
                <li> <AnchorLink className="anchorLink" offset={50} href="#contact"><a>Contact</a></AnchorLink> </li>
            </ul>

            {showDrop ? 
            <ul className='dropList'>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={200} href="#home"><a>Home</a></AnchorLink> </li>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={50} href="#about"><a >About</a></AnchorLink> </li>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={50} href="#services"><a >Services</a></AnchorLink> </li>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={50} href="#skills"><a>Skills</a></AnchorLink> </li>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={280} href="#portfolio"><a>Portfolio</a></AnchorLink> </li>
                <li onClick={()=>setShowDrop(false)}> <AnchorLink className="anchorLink" offset={50} href="#contact"><a>Contact</a></AnchorLink> </li>
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