import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src= "about_profile.jpg" width={550} height={600} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm currently a third year at the University of Michigan pursuing a bachelor's degree in electrical engineering and looking to gain new experience in the field.</p>
                    <p>In addition to my electrical engineering experience, I also have a solid grasp on coding in various languages. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Python</p>
                        <hr style={{width:"100%"}} />
                        <p>2+ years</p>
                    </div>
                    <div className="about-skill">
                        <p>C++</p>
                        <hr style={{width:"100%"}} />
                        <p>3+ years</p>
                    </div>
                    <div className="about-skill">
                        <p>Java/Javascript</p>
                        <hr style={{width:"100%"}} />
                        <p>4+ years</p>
                    </div>
                    <div className="about-skill">
                        <p>MATLAB</p>
                        <hr style={{width:"100%"}} />
                        <p>2+ years</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1></h1>
                <p></p>
            </div>
            
            <div className="about-achievement">
                <h1></h1>
                <p></p>
            </div>
            
            <div className="about-achievement">
                <h1></h1>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default About
