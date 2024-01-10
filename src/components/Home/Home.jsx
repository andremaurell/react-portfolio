import React, {useRef, useState, useEffect} from 'react'
import style from './Home.module.css'
import foto_home from '/src/assets/fotocurriculocanva.jpeg'

export default function Home({}) {

    return (
        <div>
        
            <section className={style['home']} id='home'>
                <div className={style['home-content']}>
                    <h2>Hello World!</h2>
                    <h1>I'm André Maurell</h1>
                    <h2>And i'm a <span className='yellow'>Frontend Developer</span></h2>
                    <p>Computer Engineering student, currently in the 4rd year and specializing in Front-end Development</p>
                    <div className={style['social-media']}>
                        <a href="https://www.instagram.com/andremaurell/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt' ></i></a>
                        <a href="https://www.linkedin.com/in/andré-maurell-19328b240/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin' ></i></a>
                        <a href="https://github.com/andremaurell" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github' ></i></a>
                    </div>

                    <a href="https://drive.usercontent.google.com/u/0/uc?id=1yK28wW_Kh1hbDiiGLJnPjfxp40QmpeIG&export=download" className = "btn" >Download CV</a>

                </div>
                <div className={style['home-image']}>
                    <img src={foto_home}  alt="" />
                </div>
            </section>
        </div>
    )
    }
