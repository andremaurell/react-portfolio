import React, {useRef, useState, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"
import style from './Navbar.module.css'

export default function Navbar({}) {

window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    })
}

    return (
        <div className={style['header']}>
            <a href="#" className={style['logo']}>Portfolio</a>
            <nav className={style['navbar']}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
            </nav>
        </div>
    )
    }