import React, {useState, useEffect} from 'react'
import style from './Navbar.module.css'

export default function Navbar({}) {
    
    const [active, setActive] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        sections.forEach( sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop -150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            setActive(id);
            }
        });
        }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            }
        }, []); 

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)

    }

        

    return (
        <div className={style['header']}>
            <a href="#" className={style['logo']}>Portfolio</a>

            <div className={`${style['menu-icon']} ${isMenuOpen ? style['bx-x'] : ''}`} onClick={handleMenuClick}>
                <i className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'} id="menu-icon"></i>
            </div>

            <nav className={`${style['navbar']} ${isMenuOpen ? style['active'] : ''}`}>
                <a href="#home" className={active === "home" ? style['active'] : ""}>Home</a>
                <a href="#about" className={active === "about" ? style['active'] : ""}>About</a>
                <a href="#services" className={active === "services" ? style['active'] : ""}>Services</a>
                <a href="#portfolio" className={active === "portfolio" ? style['active'] : ""}>Portfolio</a>
            </nav>
        </div>
    )
    }