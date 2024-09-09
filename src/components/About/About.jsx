import React, { useRef, useState, useEffect } from "react";
import style from "./About.module.css";
import { toggleExpansion } from "../../utils/utils";
import foto_about from "/src/assets/fotocurriculocanva.jpeg";

export default function About({}) {
  const [readMore, setReadMore] = useState(false);

  const handToggle = () => {
    toggleExpansion(readMore, setReadMore);
  };
  return (
    <div>
      <section className={style["about"]} id="about">
        <div className={style["about-image"]}>
          <img src={foto_about} alt="" />
        </div>
        <div className={style["about-content"]}>
          <h2>
            About <span className="yellow">Me</span>
          </h2>
          <h3>Frontend Developer!</h3>
          <p style={{ marginBottom: "4px" }}>
            My name is André Maurell, I am 22 years old and I'm a Software
            Developer. I am graduating in Computer Engineering and currently I'm
            in the last semester. My main focus is Frontend development, but I
            can work as a fullstack if necessary.
          </p>

          {readMore && (
            <p className={style["more"]}>
              Currently, I work as a Junior Front-end Developer, where I apply
              my knowledge to create intuitive and efficient user interfaces.
              Over the past year of concentrating on Front-end development, I
              had the opportunity to work with a startup, which reinforced my
              confidence in developing everything from simple projects, like
              responsive landing pages, to more complex systems involving
              backend API rest, such as forms and scheduling systems.
            </p>
          )}
          <button onClick={handToggle} className="btn">
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>
    </div>
  );
}
