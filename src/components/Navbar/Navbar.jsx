import React, {useRef, useState, useEffect} from 'react'
import style from './Navbar.module.css'

export default function Navbar({}) {

    return (
        <div className={style['header']}>
            <a href="#" className={style['logo']}>Portfolio</a>
            <nav className={style['navbar']}>
                <a href="#home">Home</a>
                <a href="#About">About</a>
                <a href="#Services">Services</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#Contact">Contact</a>
            </nav>
        </div>
    )
    }