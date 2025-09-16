import Nav from "../Nav";
import Footer from "../footer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function ReviewCreate(){
    const [nextId,setNextId]=useState(4);
    const location=useLocation();
    const PathName=location.state.Path;
    const navigate=useNavigate();
    return(
        <>
            <Nav />
            <h2>리뷰작성</h2>
            <p>부적절한 언어 사용시 삭제될수 있습니다!</p>
            <div id="review-create-article">
                <p>
                    <input type="text" name="nickname" placeholder="이름" />
                </p>
                <p>
                    <textarea name="review" placeholder="리뷰를 작성해주세요!!"></textarea>
                </p>
                <p>
                    <button onClick={(e)=>{
                        const nickname=e.target.nickname;
                        const review=e.target.review;
                        navigate(`${PathName}`,{state:{
                            addId:nextId,
                            addName:nickname,
                            addReview:review
                        }});
                        setNextId(nextId+1);
                    }
                    }>작성</button>
                </p>
            </div>
            <Footer />
        </>
    )
}

export default ReviewCreate;