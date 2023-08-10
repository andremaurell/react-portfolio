import React, {useRef, useState, useEffect} from 'react'
import style from './Footer.module.css'

export default function Portfolio({}) {

    return (
        <footer className={style['footer']}>
            <div className={style["footer-text"]}>
                <p>Copyright &copy; 2023 by André Maurell</p>
            </div>
            <div className={style["footer-iconTop"]}>
                <a href="#"><i class='bx bx-up-arrow-alt'></i></a>
            </div>
        </footer>
    )
    }