import React, {useRef, useState, useEffect} from 'react'
import style from './Portfolio.module.css'

export default function Portfolio({}) {

    return (
        <div>
            <section className={style['portfolio']}id='portfolio'>
                <h2>Latest <span className='blue'> Projects</span></h2>
                <div className={style["portfolio-content"]}> 
                    <div className={style["projects-box"]} id = "firstSon">
                        <img src='../../src/assets/Pokedex.jpg' alt="" />
                        <div className={style["portfolio-layer"]}>
                            <h3>Pokedex - JS</h3>
                            <p>Pokedex of anime Pokemon in JS/HTML/CSS.</p>
                            <a href="https://andremaurell.github.io/Pokedex/"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                    <div className={style["projects-box"]} id = "firstSon">
                        <img src='../../src/assets/Monopoly.jpg' alt="" />
                        <div className={style["portfolio-layer"]}>
                            <h3>Monopoly</h3>
                            <p>Monopoly board game in JS/HTML/CSS.</p>
                            <a href="https://andremaurell.github.io/monopoly/"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                    <div className={style["projects-box"]} id = "firstSon">
                        <img src='../../src/assets/Portfolio3.jpg' alt="" />
                        <div className={style["portfolio-layer"]}>
                            <h3>Website FBOT</h3>
                            <p>Site of FBOT team in JS/HTML/CSS.</p>
                            <a href="http://www.fbot.c3.furg.br/butia.html"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                    
                         
                </div>
            </section>
        </div>
    )
    }