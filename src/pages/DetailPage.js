import Footer from "../footer";
import Nav from "../Nav";
import Kakao from "../components/Kakao";

function DetailPage(){
    return <>
        <Nav />
        <div id="article-top">
              <h1>가게상호명</h1>
        </div>
        <div id="article-middle">
            <img src={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} alt="가게사진" />
            <h3>가게상호명</h3>
            <p>00시 00구 00동</p>
            <p>tel.041-0000-0000</p>
        </div>
        <Kakao />
        <Footer />
    </>
}

export default DetailPage;