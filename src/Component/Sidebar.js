import React from "react";
import './Sidebar.css'

export default function Sidebar({open,children}){
    return(
        <div className={`sidebar ${open? 'open':''}`}>
            <div className="sidebar-menus">{children}</div>
        </div>
    )
}
