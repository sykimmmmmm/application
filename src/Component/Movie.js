import React from "react";
import './Movie.css';

export default function Movie({movie}){
    const { title, medium_cover_image, summary, genres } = movie
    return(
        <>
            <div className="Movie-container">
                <h1>{title}</h1>
                <div className="Movie-img-box">
                    <img src={medium_cover_image} alt={title}></img>
                </div>
                <p>{summary}</p>
                <h2>{genres.join(' ')}</h2>
            </div>
        </>
    )
}