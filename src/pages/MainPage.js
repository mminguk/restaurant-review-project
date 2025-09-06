import Nav from '../Nav';
import Footer from '../footer';
import RestaurantCard from '../components/RestaurantCard';
import { korea } from '../data/data';
import '../App.css';

function MainPage(){
    return (
        <div id="page">
            <Nav></Nav>
            <div id="article-top">
              <h1>이 사이트는 천안의 맛집들을 소개해주는 사이트입니다. 많은 관심부탁드립니다!!</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
            </div>
          <span><h2>맛집 추천</h2></span>
          <div id='recommand'>
            {korea.map((item)=>(
                <RestaurantCard key={item.id} {...item} />
              ))}
          </div>
            <Footer></Footer>
        </div>
    )
}

export default MainPage;