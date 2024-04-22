import React from "react";
import './Search.css'
import { MdSearch } from "react-icons/md";


export default function Search({placeholder,className,handleChange}){
    return(
        <div className="input-box">
            <input placeholder={placeholder} className={`Search ${className}`} onChange={handleChange}/>
            <span className="search-icon"><MdSearch/></span>
        </div>
    )
}