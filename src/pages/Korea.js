import Nav from '../Nav';
import MenuCard from '../MenuCard';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import '../App.css';
import { korea, korea_menu } from '../data/data';
function Korea(){
    return <>
        <Nav />
        <div id="article-top">
              <h1>천안 한식 맛집 모음</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <span><h2>메뉴별 맛집 모음</h2></span>
        <div id="menu-list">
            {korea_menu.map((item)=>(
                <MenuCard  key={item.id} {...item} />

            ))}
        </div>
        <span><h2>맛집 추천</h2></span>
        <div id="recommand">
            {korea.map((item)=>(
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
        <Footer />
    </>
}

export default Korea;