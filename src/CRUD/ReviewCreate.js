import Nav from "../Nav";
import Footer from "../footer";
import { reviewdata } from "../data/review";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function ReviewCreate(){
    const [Review,setReview]=useState([...reviewdata]);
    const [nextid,setNextid]=useState(4);
    const location=useLocation();
    const navigate=useNavigate();
    const pathName=location.state.pathName;
    const Title=location.state.title;
    const Address=location.state.address;
    const _id=location.state.Id;
    return(
        <>
            <Nav />
            <h2>리뷰작성</h2>
            <p>부적절한 언어 사용시 삭제될수 있습니다!</p>
            <form id="review-create-article" action="/create_process" onSubmit={(e)=>{
                e.preventDefault();
                const nickname=e.target.nickname;
                const review=e.target.review;
                const newReview={id:nextid,name:nickname,review:review};
                const newReviews=[...Review, newReview];
                setReview(newReviews);
                setNextid(nextid+1);
                navigate(`${pathName}`,{state:{
                    title:Title,
                    address:Address,
                    Id:_id,
                    newreviewdata:Review
                }});
            }}>
                <p>
                    <input type="text" name="nickname" placeholder="이름" />
                </p>
                <p>
                    <textarea name="review" placeholder="리뷰를 작성해주세요!!"></textarea>
                </p>
                <p>
                    <input type="submit" value="작성" />
                </p>
            </form>
            <Footer />
        </>
    )
}

export default ReviewCreate;