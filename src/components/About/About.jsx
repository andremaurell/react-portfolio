import React, {useRef, useState, useEffect} from 'react'
import style from './About.module.css'


export default function About({}) {
    const [readMore, setReadMore] = useState(false);

    const toggleExpansion = () => {
        setReadMore(!readMore);

    }
    return (
        <div>
            <section className={style['about']}>
                    <div className={style["about-image"]}>
                        <img src='../../../src/assets/fotocurriculocanva.jpeg'  alt="" />
                    </div>
                <div className={style['about-content']}>
                    <h2>About  <span className = "blue">Me</span></h2>
                    <h3>Frontend Developer!</h3>
                    <p>My name is André Maurell, I am 20 years and I am a Computer
                        Engineering student at the Federal University of Rio Grande 
                        (FURG). I am currently in the 4rd year and specializing in
                        Front-end Development but I intend to become a Full-Stack 
                        developer in the future.

                        {readMore && (
                            <span className={style['more']}> I have experience in HTML, CSS, 
                            JavaScript, MySQL, ROS, Git, GitHub, and I am currently 
                            studying React. I am passionate about technology and 
                            I am always looking for new knowledge. 
                            I am a very organized person, I like to work in a team and 
                            I am always willing to learn new things.</span>
                        )}
                    </p>
                    <button onClick={toggleExpansion} className='btn'>
                        {readMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </section>
        </div>
    )
    }