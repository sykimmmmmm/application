import { NavLink, useLocation } from "react-router-dom"
import './QuickNavLink.css'

export default function QueryNavLink({to,children,...props}){
    const location = useLocation()
    return(
        <NavLink to={to+location.search} {...props} className='Movie-list'>{children}</NavLink>
    )
}