import React from 'react'
import "./experience.css"

const Experience = () => {
  return (
    <section className="experience section" id="experience">
        <h2 className="section__title">Experiences</h2>
        <span className="section__subtitle">What I have done so far..</span>

        <div className="experience__container container">
            <div className="experience__tabs">
                <div className="experience__button button--flex">
                    <i className="uil uil-briefcase-alt experience__icon"></i>
                </div>

            
            </div>
            <div className="experience__sections">
                <div className="experience__content">
                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Software Engineer Intern</h3>
                            <span className="experience__subtitle">PT. Rapier Technology International</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>Jan.2020 - Apr.2022
                            </div>
                        </div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>
                    </div>

                    

                   
                    <div className="experience__data">
                        <div></div>
                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div>
                            <h3 className="experience__title">Full Stack Developer Intern</h3>
                            <span className="experience__subtitle">Cove</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>May.2023 - Aug.2023
                            </div>
                        </div>

                        
                    </div>

                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Software Engineer Intern</h3>
                            <span className="experience__subtitle">Esportium</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>May.2024 - Aug.2024
                            </div>
                        </div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>
                    </div>
        
                    <div className="experience__data">
                        <div></div>
                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div>
                            <h3 className="experience__title">Front-end Developer</h3>
                            <span className="experience__subtitle">MedPass</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>Feb.2025 - May.2025                           
                            </div>
                        </div>

                        
                    </div>

                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Software Engineer</h3>
                            <span className="experience__subtitle">FinChat</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>Apr.2025 - Jul.2025
                            </div>
                        </div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>
                    </div>

                    <div className="experience__data">
                        <div></div>
                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div>
                            <h3 className="experience__title">Software Engineer</h3>
                            <span className="experience__subtitle">Postilize</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>Aug.2025 - Present                          
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            <div className='present__container'>
                <p className='present__text'>Present</p>
            </div>
            
        </div>

    </section>
  )
}

export default Experience
