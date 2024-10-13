import  { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useEffect } from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {


  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMmenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMmenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMmenu? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programes' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}> <button className='btn'> Contact us</button></Link></li>
      </ul>
      <img src={menu_icon} alt='' className='menu_icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar