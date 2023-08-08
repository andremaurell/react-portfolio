import React, {useRef, useState, useEffect} from 'react'
import style from './Services.module.css'

export default function Services({}) {

    return (
        <div>
            <section className={style['services']}>
            <h2>My <span className = "blue">Services</span></h2>
                <div className={style["services-content"]}> 
                    <div className={style["services-box"]} id = "firstSon">
                        <i class='bx bx-code-alt' ></i>
                        <h3>Web Development</h3>
                        <p>I work with Web Development since 2022, but, in 2023 wich I really started to study and work with this.<span class="points">..</span><span class="more">
                    I have some projects with HTML, CSS and JS, but, i still don't work with frameworks, but I'm studying React. </span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
    }