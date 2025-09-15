import Footer from "../footer";
import Nav from "../Nav";
import '../styles/DetailPage.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { reviewdata } from "../data/review";


function DetailPage(){
    const navigate=useNavigate();
    const location=useLocation();
    const title=location.state.title;
    const address=location.state.address;
    const PathName=location.state.routeName;
    return <>
        <Nav />
        <div id="detail-article-top">
            <h1>{title}</h1>
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
            <div id='restaurant-review'>
                <span id="review-border"><h3>리뷰</h3></span>
                <div id="review-container">
                    <div id="review-write">
                        <p>리뷰를 작성해주세요!!</p>
                        <input type="button" value="작성하기" onClick={()=>{
                            navigate(`${PathName}/DetailPage/Create`);
                        }} />
                    </div>
                    {reviewdata.map((item)=>(
                        <div className="review" key={item.id} >
                            <h4>{item.name}</h4>
                            <p>{item.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default DetailPage;