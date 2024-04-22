import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu({menus,handleClick}){
    return(
        <>
            {menus.map((menu,id)=>{
                return(
                    <Link key={id} to={menu.url} className='menu' onClick={handleClick}>{menu.name}</Link>
                )
            })}
        </>
    )   
}