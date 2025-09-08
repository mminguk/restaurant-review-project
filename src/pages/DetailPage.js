import Footer from "../footer";
import Nav from "../Nav";


function DetailPage(){
    return <>
        <Nav />
        <div id="article-top">
              <h1>가게상호명</h1>
        </div>
        <div id="article-middle">
            <img src={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} alt="가게사진" width='300px' />
            <div id='restaurant-menu'>
                <span><h3>대표메뉴</h3></span>
                <p>00메뉴 --- 10000원</p>
                <p>00메뉴 --- 20000원</p>
                <p>00메뉴 --- 30000원</p>
            </div>
            <div id='restaurant-info'>
                <span><h3>가게상호명</h3></span>
                <p>00시 00구 00동</p>
                <p>tel.041-0000-0000</p>
            </div>
            <div id='restaurant-review'>
                <span id="review-border"><h3>리뷰</h3></span>
                <div id="review-container">
                    <div className='review'>
                        <h4>000</h4>
                        <p>맛있습니다!! 또 오겠습니다</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default DetailPage;