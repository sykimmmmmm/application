import React, { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import Movie from "../Component/Movie"
import Search from "../Component/Search"
import MovieContents from "../Component/MovieContents"

export default function MovieList({data}){
    const params = useParams()//movieId값
    // console.log(data)
    const applyActiveColor=({ isActive })=>(isActive?{color:'orangered',background:'yellow'}:{}) // NavLink액티브스타일
    
    const [search,setSearch]=useSearchParams()//검색기능 필터담을곳
    const changeQueryString=(e)=>{ //검색기능 구현
        const filter = e.target.value
        if(filter){
            setSearch({filter})
        }else{
            setSearch({})
        }
    }
    const moviesFiltered = data // 필터링한 데이터로 가공
    .filter(movie =>{
        const filter = search.get('filter')
        if(!filter) return true
        const title = movie.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    })

    /* 필터링 지워도 클릭했던 화면계속 유지 */
    const [idx,setIdx] =useState(null)
    // /** 검색된 것이 없을 경우 기존에 보여줬던 무비화면 계속 유지 및 검색 후 하나의 무비를 클릭하고 난 뒤 검색창을 초기화할시 인덱스 값이 달라져 보이는 무비화면이 바뀌는 것을 방지 */
    useEffect(()=>{
        for(let i in data){
            if(data[i].id==params.movieId){
                setIdx(i)
            }
        }
    },[params.movieId])

    /* 무비 데이터 */
    const movie = data[idx]
    return(
        <>
            <br/><br/>
            <Search handleChange={changeQueryString} placeholder='search Movie...' className='slateblue' value={search.get('filter')||''}/>
            {movie ?
                <Movie movie={movie}/> :
                <h1> Movie Page </h1>
            }
            <MovieContents moviedata={moviesFiltered} style={applyActiveColor}/>
        </>
    )
}