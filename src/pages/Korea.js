import Nav from '../Nav';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../footer';
import '../App.css';
import { korea } from '../data/data';
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
        <span><h1>메뉴별 맛집 추천</h1></span>
        <span><h2>찌개류</h2></span>
        <div id="recommand">
            {korea.map((item)=>(
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
        <span><h2>백반</h2></span>
        <div id="recommand">
            {korea.map((item)=>(
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
        <span><h2>육류</h2></span>
        <div id="recommand">
            {korea.map((item)=>(
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
        <Footer />
    </>
}

export default Korea;