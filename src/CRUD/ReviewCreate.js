import Nav from "../Nav";
import Footer from "../footer";
import { useState } from "react";
import { reviewdata } from "../data/review";
function ReviewCreate(){
    // const [inputs,setInputs]=useState({
    //     nickname:'',
    //     review:''
    // });
    // const {nickname,review}=inputs;
    // const onChange=(e)=>{
    // const {name,value} = e.target // name과 value를 e.target에서 가져온다.
    // setInputs({
    //         ...inputs,// 객체에서 spread 연산자를 사용해서 기존 값을 다 넣는 것으로 
    //   			// 배열에서도 사용할 수 있다.
    //         [name]:value
    //     });
    // }
    // const [reviews,setReviews]=useState([...reviewdata]);
    return(
        <>
            <Nav />
            <h2>리뷰작성</h2>
            <p>부적절한 언어 사용시 삭제될수 있습니다!</p>
            <form action="/create_process" onSubmit={(event)=>{
                event.preventDefault();
                
            }} method="post">
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