import Nav from "../Nav";
import MenuCard from "../MenuCard";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../footer";
import { japan } from "../data/data";
function Japan(){
    return (
        <>
        <Nav />
        <div id="article-top">
              <h1>천안 일식 맛집 모음</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <span><h1>메뉴별 맛집 추천</h1></span>
        <span><h2>돈카츠</h2></span>
        <div id="recommand">
          {japan.map((item)=>(
            <RestaurantCard key={item.id} {...item} />
          ))}
        </div>
        <span><h2>라멘</h2></span>
        <div id="recommand">
            {japan.map((item)=>(
            <RestaurantCard key={item.id} {...item} />
          ))}
        </div>
        <span><h2>스시</h2></span>
        <div id="recommand">
            {japan.map((item)=>(
            <RestaurantCard key={item.id} {...item} />
          ))}
        </div>
        <Footer />
    </>
    );
}

export default Japan;