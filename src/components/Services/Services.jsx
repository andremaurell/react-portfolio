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
            <h2>My <span className = "yellow">Services</span></h2>
                <div className={style["services-content"]}> 
                    <div className={style["services-box"]} id = "firstSon">
                        <i class='bx bx-code-alt' ></i>
                        <h3>FrontEnd Development</h3>
                        <p>I study Front end Development since 2021, 
                            but, in 2023 I really started to 
                            work with this.
                            { readMore && (
                            <span className="more">
                            I'm Front end developer using React, Typescript, Tailwind, SASS, CSS3, HTML5, Next.js, Jest/Testing Librarys and have
                            some experience with Docker and react-native. </span>
                    )}  
                        </p>
                        <button onClick={handToggle} className='btn'>
                            {readMore ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                    <div className={style["services-box"]} id = "secondSon">
                        <i class='bx bx-code-alt' ></i>
                        <h3>Backend Development</h3>
                        <p>I started studying backend development to help with my personal projects, but in some freelance jobs, I worked as a Fullstack developer.
                            { readMore2 && (
                            <span className="more">
                            I have experience with, 
                            Node.js, Flask, PostgresSQL,
                            MongoDB and Jest </span>
                    )}  
                        </p>
                        <button onClick={handToggle2} className='btn'>
                            {readMore2 ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                    <div className={style["services-box"]} id = "thirdSon">
                        <i class='bx bxl-android' ></i>
                        <h3>Robotic Development</h3>
                        <p>I met the robotic in University,
                             since my first year of graduation
                              I participate of projects like the 
                              FBOT team.
                            { readMore3 && (
                            <span className="more">
                            On behalf of the FBOT team, I participate 
                            in competitions in the @Home category, 
                            where we work on developing a domestic 
                            and autonomous robot. I have experience
                            with ROS2, OpenCV, Machine Learning and python. </span>
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