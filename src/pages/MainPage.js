import Nav from '../Nav';
import Footer from '../footer';
import '../styles/MainPage.css';

function MainPage(){
    return (
        <div id="page">
            <Nav></Nav>
            <div id="article-top">
              <div id="article-top-title">
                <h1>이 사이트는 천안의 맛집들을 소개해주는 사이트입니다. 많은 관심부탁드립니다!!</h1>
              </div>
              <div id="article-search">
                <h2>맛집 검색</h2>
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainPage;