import React from "react";
import './Button.css'

export default function Button({children,size,color,width,handleClick,disabled}){
    return(
        <button className={`Button ${size} ${color} ${width} ${ disabled ? 'blocked' : '' }`} onClick={handleClick}>{children}</button>
    )
}

Button.defaultProps={
    size:"medium",
    color:"tomato",
    width:'',
    disabled: false,
}