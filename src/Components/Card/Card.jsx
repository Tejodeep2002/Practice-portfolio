import React from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import "./Card.css"
const Card = ({emoji, heading, detail}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
        <img src={emoji} alt=""/>
        <span>{heading}</span>
        <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>
        <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Card
