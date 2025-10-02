import Footer from "../footer";
import Nav from "../Nav";
import '../styles/DetailPage.css';
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";


function DetailPage(){
    const location=useLocation();
    const title=location.state.title;
    const address=location.state.address;
    const AddItemHandler=()=>{
        const obj={
            _title:title,
            _address:address
        };
        const objString=JSON.stringify(obj);
        window.localStorage.setItem(title,objString);
    }
    return <>
        <Nav />
        <div id="detail-article-top">
            <h1>{title}</h1>
            <button id="bookmark" onClick={AddItemHandler}><i className="fa-regular fa-bookmark"></i></button>
        </div>
        <div id="detail-article-middle">
            <img src={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} alt="가게사진" width='300px' />
            <div id='restaurant-menu'>
                <span><h3>대표메뉴</h3></span>
                <p>00메뉴 --- 10000원</p>
                <p>00메뉴 --- 20000원</p>
                <p>00메뉴 --- 30000원</p>
            </div>
            <div id='restaurant-info'>
                <span><h3>{title}</h3></span>
                <p>{address}</p>
                <p>tel.041-0000-0000</p>
            </div>
            
        </div>
        <Footer />
    </>
}

export default DetailPage;