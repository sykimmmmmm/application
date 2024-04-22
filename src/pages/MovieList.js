import React from "react"
import { useParams, useSearchParams } from "react-router-dom"
import Movie from "../Component/Movie"
import Search from "../Component/Search"
import QueryNavLink from "../Component/QuickNavLink"
import './MovieList.css'

export default function MovieList({data}){
    const params = useParams()
    console.log(data)
    const [search,setSearch]=useSearchParams()
    
    const applyActiveColor=({ isActive })=>(isActive?{color:'orangered',background:'yellow'}:{})

    const changeQueryString=(e)=>{
        const filter = e.target.value
        if(filter){
            setSearch({filter})
        }else{
            setSearch({})
        }
    }
    
    const moviesFiltered = data
    .filter(movie =>{
        const filter = search.get('filter')
        if(!filter) return true
        const title = movie.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    })

    /** 검색 후 하나의 무비를 클릭하고 난 뒤 검색창을 초기화할시 인덱스 값이 달라져 보이는 무비화면이 바뀌는 것을 방지 */
    let index = 0
    let movie
    for(let i in moviesFiltered){
        if(moviesFiltered[i].id==params.movieId){
            index=i
            movie = moviesFiltered[index]
        }
    }
    /** 검색된 것이 없을 경우 기존에 보여줬던 무비화면 계속 유지 */
    for(let i in data){
        if(data[i].id==params.movieId){
            index=i
            movie=data[i]
        }
    }
    console.log(movie)
    return(
        <>
            <br/><br/>
            <Search handleChange={changeQueryString} placeholder='search Movie...' className='slateblue'/>
            {movie?
                <Movie movie={movie}/> :
                <h1> Movie Page </h1>
            }
            <div className="movies-container">
                {moviesFiltered
                .map((movie,id)=>{
                    return(
                        <QueryNavLink key={id} to={`/movies/${movie.id}`} className='Movie-item'
                        style={applyActiveColor}>
                            {movie.title}
                        </QueryNavLink>
                    )
                })}
            </div>
        </>
    )
}