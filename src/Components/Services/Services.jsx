import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from '../Services/Resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Services = () => {
  const transition = {duration : 1, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        {/* Left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awasome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                <br/>
                Soluta doloribus aliquam vel ipsam rem omnis labore ut 
            </span>
            <a href={Resume} target="_blank" >
              <button className='button s-button'>Download CV</button>
            </a>
            
            <div className='blur s-blurl' style={{ background: "#ABF1FF94"}}></div>


        </div>
        {/* right Side */}
        <div className="cards">
            <motion.div
            initial={{left: '25rem'}}
            whileInView={{left: '14rem'}}
            transition={transition}
            style={{left: '14rem'}}>
              <Card
              emoji = {HeartEmoji}
              heading = {'Design'}
              detail = {"Figma, Sketch, Photoshop, Adobe, AdobeXD"}
              />
            </motion.div>
              {/* second card */}
            <motion.div
            initial={{left: '-8rem'}}
            whileInView={{left: '-4rem'}}
            transition={transition}
            style={{ top: "12rem", left: "-4rem" }}>
              <Card
                emoji={Glasses}
                heading={"Developer"}
                detail={"Html, Css, JavaScript, React ,Figma, Sketch, Photoshop, Adobe, AdobeXD"}
              />
            </motion.div>
              {/* 3rd */}
            <motion.div
            initial={{left: '22rem'}}
            whileInView={{left: '12rem'}}
            transition={transition}
            style={{top:"19rem", left:"12rem"}}>
              <Card
                emoji={Humble}
                heading={"UI/UX"}
                detail={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
              />
            </motion.div>
            <div className='blur s-blur2' style={{background: "var(--purple)" }}></div>
        </div>
      
    </div>
  )
}

export default Services
