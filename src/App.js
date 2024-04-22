import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Home, About, MovieList, NotFound } from './pages'
import Menu from './Component/Menu';
import Sidebar from './Component/Sidebar';
import { useEffect, useState } from 'react';
import Button from './Component/Button';

const homeMenu=[
    {
        url:'/',
        name:'Home'
    },
    {
        url:'/about',
        name:'About'
    },
    {
        url:'/movies',
        name:'Movie'
    },
]

function App() {
    const [movieList, setMovieList] = useState([])

    const [sidebarOpen,setSidebarOpen] = useState(false)

    const openSideber = ()=>{
        setSidebarOpen(!sidebarOpen)
    }

    useEffect(()=>{
       fetch('https://yts.mx/api/v2/list_movies.json')
       .then(res => res.json())
       .then(({data}) => {
            setMovieList(data.movies)
       })
    },[])

    return (
        (movieList.length>0)?
        <div className="App">
            <Sidebar open={sidebarOpen}>
                <Menu menus={homeMenu} className={'App'} handleClick={openSideber}/>
            </Sidebar>
            <Button handleClick={openSideber} color='slateblue'>Menu</Button>
            <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/movies' element={<MovieList data={movieList}/>}>
                <Route path=':movieId' element={<MovieList/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div> :
        <h1 className='loading'>Loading...</h1>
    );
}

export default App;
