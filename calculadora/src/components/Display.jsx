import React from "react";
import './Display.css'

export default props => 
    <div className="display">{props.value} <span className="zero">0</span></div>