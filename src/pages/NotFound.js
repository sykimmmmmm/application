import { NavLink } from "react-router-dom";

const style = {
    textDecoration:'none',
    color:'#000021',
    border:'1px solid khaki',
    background:'khaki',
    borderRadius:"10px",
    padding:"10px",
}

export default function NotFound(){
    return(
        <div className="404Page">
            <h1> 404 ERROR </h1>
            <p>
                죄송합니다. 요청하신 페이지를 찾을 수 없습니다. <br/>
                존재하지 않는 주소를 입력하셨거나 <br/>
                요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
            </p>
            <NavLink to='/' style={style}>홈으로</NavLink>
        </div>
    )
}