import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src="profile_img.png" width={500} height={500} alt="" />
            <h1><span>I'm Shiham Chowdhury.</span></h1>
            <p>I'm an aspiring electrical engineer pursuing a bachelor's degree at the University of Michigan.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></div>
                <div className="hero-resume" onClick={(event) => { event.preventDefault(); window.open('Resume.pdf')}}>My Resume</div>
            </div>
        </div>
    )
}

export default Hero