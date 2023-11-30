import React, {useRef, useState, useEffect} from 'react'
import style from './Portfolio.module.css'
import pokedex from '/src/assets/Pokedex.jpg'
import monopoly from '/src/assets/Monopoly.jpg'
import siteFbot from '/src/assets/Portfolio3.jpg'
import movieSearch from '/src/assets/1.jpg'
import rpgCreator from '/src/assets/rpgcreator.jpg'
export default function Portfolio({}) {

    return (
        <div>
            <section className={style['portfolio']}id='portfolio'>
                <h2>Latest <span className='yellow'> Projects</span></h2>
                <div className={style["portfolio-content"]}> 
                    <div className={style["projects-box"]} id = "firstSon">
                        <img src={pokedex} alt="" />
                        <div className={style["portfolio-layer"]}>
                            <h3>Pokedex - JS</h3>
                            <p>Pokedex of anime Pokemon in JS/HTML/CSS.</p>
                            <a href="https://andremaurell.github.io/Pokedex/"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                    <div className={style["projects-box"]} id = "firstSon">
                        <img src={monopoly} alt="" />
                        <div className={style["portfolio-layer"]}>
                            <h3>Monopoly</h3>
                            <p>Monopoly board game in JS/HTML/CSS.</p>
                            <a href="https://andremaurell.github.io/monopoly/"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                    <div className={style["projects-box"]} id = "firstSon">
                        <img src={siteFbot} alt="" />
                        <div className={style["portfolio-layer"]}>
                            <h3>Website FBOT</h3>
                            <p>Site of FBOT team in Tailwind, Astro and Typescript.</p>
                            <a href="https://fbot.vercel.app"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                    <div className={style["projects-box"]} id = "firstSon">
                        <img src={movieSearch} alt="" />
                        <div className={style["portfolio-layer"]}>
                            <h3>Movie Search</h3>
                            <p>Site to search movies from an API in js</p>
                            <a href="https://andremaurell.github.io/ajax-dom/"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                    <div className={style["projects-box"]} id = "firstSon">
                        <img src={rpgCreator} alt="" />
                        <div className={style["portfolio-layer"]}>
                            <h3>RPG Adventure</h3>
                            <p>RPG adventure creator with flask/js and OpenAI API.</p>
                            <a href="https://rpg-adventure-furg-34fc91c49caa.herokuapp.com"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    
                         
                </div>
            </section>
        </div>
    )
    }