import React from 'react';
import "./about.css";
import Resume from "../../assets/williamResume.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">README.md</h2>
      <div className="container row" id="img-console">
        <div id="console">
          <span className="first-color">package </span>
          <span className="fifth-color">aboutMe</span><span className="second-color">;</span>
          <br/>
          <br/>
          <span className="first-color">public </span>
          <span className="third-color">class </span>
          <span className="fifth-color">William </span>
          <span className="first-color">extends </span>
          <span className="fifth-color">human </span>
          <span className="second-color">{'{'}</span>
          <br/>
          <ul>
            <span className="first-color">public </span>
            <span className="fifth-color">William</span>
            <span className="second-color">() {'{'}</span>
            <br/>
            <ul>
              <span className="third-color">String </span>
              <span className="second-color">fullName = </span>
              <span className="fourth-color">"William Edwardo Gunawan"</span><span className="second-color">;</span>
              <br/>
              <span className="third-color">String </span>
              <span className="second-color">location = </span>
              <span className="fourth-color">"Toronto, ON, Canada"</span><span className="second-color">;</span>
              <br/>
              <span className="third-color">Resume </span>
              <span className="second-color">resume = </span>
              <span className="first-color">new </span>
              <span className="second-color">Resume(</span>
              <a download="" href={Resume} className="fourth-color">"Download-Resume"</a>
              <span className="second-color">);</span>
              <br/>
              <span className="third-color">String[] </span>
              <span className="second-color">hobbiesAndInterests = </span>
              <span className="first-color">new </span>
              <span className="third-color">String[]</span>
              <span className="second-color">{'{'}</span>
              <br/>
              <ul>
                <span className="fourth-color">"Coding"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Artificial Intelligence"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Eat"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Music"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Games"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Travel"</span>
                <br/>
              </ul>
              <span className="second-color">{'}'}</span>
              <br/>
            </ul>
            <span className="second-color">{'}'}</span>
            <br/>
            <span className="first-color">public static </span>
            <span className="third-color">void </span>
            <span className="fifth-color">Education</span>
            <span className="second-color">() {'{'}</span>
            <ul>
              <span className="third-color">String </span>
              <span className="second-color">university = </span>
              <span className="fourth-color">"Toronto Metropolitan University"</span><span className="second-color">;</span>
              <br/>
              <span className="third-color">String </span>
              <span className="second-color">degree = </span>
              <span className="fourth-color">Bachelor of Science</span><span className="second-color">;</span>
              <br/>
              <span className="third-color">String </span>
              <span className="second-color">major = </span>
              <span className="fourth-color">Computer Science</span><span className="second-color">;</span>
              <br/>
              <span className="third-color">int </span>
              <span className="second-color">graduated = </span>
              <span className="fourth-color">2025</span><span className="second-color">;</span>
              <br/>
              <span className="third-color">Email </span>
              <span className="second-color">email = </span>
              <span className="first-color">new </span>
              <span className="second-color">Email(</span>
              <a href="mailto:wiliam.gunawan@torontomu.ca" className="fourth-color">"william.gunawan@torontomu.ca"</a>
              <span className="second-color">);</span>
              <br/>
              <span className="third-color">String[] </span>
              <span className="second-color">coursework = </span>
              <span className="first-color">new </span>
              <span className="third-color">String[]</span>
              <span className="second-color">{'{'}</span>
              <br/>
              <ul>
                <span className="fourth-color">"Data Structures and Algorithms"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Databases"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Software Engineering"</span>
                <br/>
                <span className="fourth-color">"Data Science"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Artificial Intelligence"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Machine Learning"</span><span className="second-color">,</span>
                <br/>
                <span className="fourth-color">"Web Design and Development"</span>
                <br/>
                <span className="fourth-color">"Operating Systems"</span>
                <br/>
                <span className="fourth-color">"Computer Architecture"</span>
                <br/>
              </ul>
        
             
              <span className="second-color">{'}'}</span>
            </ul>
            <span className="second-color">{'}'}</span>
            <br/>
          </ul>
          <span className="second-color">{'}'}</span>
        </div>
      </div>
    </section>
  );
}

export default About;

