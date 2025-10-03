import { useEffect } from "react";
import Nav from "../Nav";
import Footer from "../footer";
import "../styles/Bookmark.css";

function Bookmark(){
    let bookmarkList=[];
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i);
        bookmarkList.push({
            _title:JSON.parse(localStorage.getItem(key))._title, 
            _address:JSON.parse(localStorage.getItem(key))._address
        })
    }
    return (
        <>
            <Nav />
            <div id="bookmark-article-top">
                <h1>즐겨찾기</h1>
            </div>
            <div id="bookmark-article-middle">
                {bookmarkList.map((item)=>(
                <div key={item._title} id="bookmark-item">
                    <h3>{item._title}</h3>
                    <p>{item._address}</p>
                    <button onClick={()=>{
                        localStorage.removeItem(item._title);
                        
                    }}>X</button>
                </div>
            ))}
            </div>
        </>
    )
}

export default Bookmark;