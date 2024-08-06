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
                            <h3 className="experience__title">Founder</h3>
                            <span className="experience__subtitle">WTOKOBD</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>Feb 2017 - Dec 2020
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
                            <h3 className="experience__title">Content Creator</h3>
                            <span className="experience__subtitle">YouTube</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>Mar 2019 - Feb 2023
                            </div>
                        </div>

                        
                    </div>

                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Content Creator</h3>
                            <span className="experience__subtitle">TikTok</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>Jan 2021 - Feb 2023
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
                            <h3 className="experience__title">E-sports Athlete</h3>
                            <span className="experience__subtitle">Toronto Metropolitan University</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>Sep 2021 - Apr 2023
                            </div>
                        </div>

                        
                    </div>

                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Full Stack Developer</h3>
                            <span className="experience__subtitle">Cove</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>May 2023 - Aug 2023
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
                            <span className="experience__subtitle">Esportium</span>
                            <div className="experience__calender">
                                <i className="uil uil-calender calender"/>May 2024 - Aug 2024
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
