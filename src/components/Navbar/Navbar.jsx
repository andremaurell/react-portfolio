import React, {useState, useEffect} from 'react'
import style from './Navbar.module.css'

export default function Navbar({}) {
    
    const [active, setActive] = useState('home')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true);

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

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    
        // Atualizar as cores no :root
        const root = document.documentElement;
        if (isDarkMode) {
            root.style.setProperty('--bg-color', '#1f242d');
            root.style.setProperty('--second-bg-color', '#323946');
            root.style.setProperty('--text-color', '#fff');
            root.style.setProperty('--main-color', '#0ef');
        } else {
            root.style.setProperty('--bg-color', '#F5F5DC');
            root.style.setProperty('--second-bg-color', '#fff');
            root.style.setProperty('--text-color', '#964B00');
            root.style.setProperty('--main-color', '#F0BE00');
        }
      };

        

    return (
        <div className={`${style['header']} ${isDarkMode ? style['dark'] : ''}`}>
            <a href="#" className={style['logo']}>Portfolio</a>

            <div className={`${style['menu-icon']} ${isMenuOpen ? style['bx-x'] : ''}`} onClick={handleMenuClick}>
                <i className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'} id="menu-icon"></i>
            </div>

            <nav className={`${style['navbar']} ${isMenuOpen ? style['active'] : ''} ${isDarkMode ? style ['dark'] : ''}`}>
                <a href="#home" className={active === "home" ? style['active'] : ""}>Home</a>
                <a href="#about" className={active === "about" ? style['active'] : ""}>About</a>
                <a href="#services" className={active === "services" ? style['active'] : ""}>Services</a>
                <a href="#portfolio" className={active === "portfolio" ? style['active'] : ""}>Portfolio</a>
            </nav>
            <button
                    className={`${style['dark-mode-button']} ${
                    isDarkMode ? style['dark'] : ''
                    }`}
                    onClick={toggleDarkMode}
                >
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </button>
        </div>
    )
    }