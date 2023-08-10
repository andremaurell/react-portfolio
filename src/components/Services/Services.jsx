import React, {useRef, useState, useEffect} from 'react'
import style from './Services.module.css'
import { toggleExpansion } from '../../utils/utils'

export default function Services({}) {

    const [readMore, setReadMore] = useState(false)
    
    const handToggle = () => {
        toggleExpansion(readMore, setReadMore);

    }

    const [readMore2, setReadMore2] = useState(false)
    
    const handToggle2 = () => {
        toggleExpansion(readMore2, setReadMore2);

    }

    const [readMore3, setReadMore3] = useState(false)
    
    const handToggle3 = () => {
        toggleExpansion(readMore3, setReadMore3);

    }

    return (
        <div>
            <section className={style['services']}id='services'>
            <h2>My <span className = "blue">Services</span></h2>
                <div className={style["services-content"]}> 
                    <div className={style["services-box"]} id = "firstSon">
                        <i class='bx bx-code-alt' ></i>
                        <h3>Web Development</h3>
                        <p>I work with Web Development since 2022, 
                            but, in 2023 wich I really started to 
                            study and work with this.
                            { readMore && (
                            <span className="more">
                            I have some projects with HTML, CSS and JS, 
                            but, i still don't work with frameworks, 
                            but I'm studying React. </span>
                    )}  
                        </p>
                        <button onClick={handToggle} className='btn'>
                            {readMore ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                    <div className={style["services-box"]} id = "secondSon">
                        <i class='bx bx-code-alt' ></i>
                        <h3>FullStack Development</h3>
                        <p>I have a little experience with React, 
                            Node.js, Next.js, Flask, MySQL and 
                            MongoDB, besides I am experient with 
                            Html, Css and JS vanilla.
                            { readMore2 && (
                            <span className="more">
                            I never work in a project like FullStack developer,
                            just in a Personal project,'Realtime Chat', in my
                            Portfolio below. </span>
                    )}  
                        </p>
                        <button onClick={handToggle2} className='btn'>
                            {readMore2 ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                    <div className={style["services-box"]} id = "thirdSon">
                        <i class='bx bxl-android' ></i>
                        <h3>Robotic</h3>
                        <p>I meeted the robotic in University,
                             since my first year of graduation
                              I participate of projects like the 
                              FBOT team.
                            { readMore3 && (
                            <span className="more">
                            On behalf of the FBOT team, I participate 
                            in competitions in the @Home category, 
                            where we work on developing a domestic 
                            and autonomous robot. I have experience s
                            with ROS and I work in LOGNAV project, 
                            where we make a autonomous robot to one company. </span>
                    )}  
                        </p>
                        <button onClick={handToggle3} className='btn'>
                            {readMore3 ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                    

                </div>
            </section>
        </div>
    )
    }