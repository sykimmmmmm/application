import React from "react";
import QueryNavLink from "./QuickNavLink";
import './MovieContents.css'

export default function MovieContents({moviedata,style}){
    return(
        <div className="movies-container">
        {moviedata
            .map((movie,id)=>{
                return(
                    <QueryNavLink key={id} to={`/movies/${movie.id}`} className='Movie-item'
                    style={style}>
                    {movie.title}
                    </QueryNavLink>
                    )
                })}
        </div>
    )
}