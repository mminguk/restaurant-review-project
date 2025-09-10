import Nav from '../Nav';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../footer';
import '../App.css';
import { Jjangmen_Jjambong } from '../data/china-data';
import { malatang } from '../data/china-data';
import { maindesh } from '../data/china-data';


function China(){
    return <>
        <Nav />
        <div id="article-top">
              <h1>천안 중식 맛집 모음</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <span><h1>메뉴별 맛집 추천</h1></span>
        <span><h2>짜장면 & 짬뽕</h2></span>
        <div id="recommand">
          {Jjangmen_Jjambong.map((item)=>(
            <RestaurantCard key={item.id} {...item} />
          ))}
        </div>
        <span><h2>마라탕</h2></span>
        <div id="recommand">
          {malatang.map((item)=>(
            <RestaurantCard key={item.id} {...item} />
          ))}
        </div>
        <span><h2>기타</h2></span>
        <div id="recommand">
          {maindesh.map((item)=>(
            <RestaurantCard key={item.id} {...item} />
          ))}
        </div>
        <Footer />
    </>
}

export default China;