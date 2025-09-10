import Nav from "../Nav";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../footer";
import { coffeeandtea } from "../data/dessert-data";
import { BbangandCake } from "../data/dessert-data";
function Dessert(){
    return (
        <>
        <Nav />
        <div id="article-top">
              <h1>천안 분위기 좋은 카페모음</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <span><h1>메뉴별 카페 추천</h1></span>
        <span><h2>커피 & 티</h2></span>
        <div id="recommand">
            {coffeeandtea.map((item)=>(
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
        <span><h2>빵 & 케이크</h2></span>
        <div id="recommand">
            {BbangandCake.map((item)=>(
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
        <Footer />
    </>
    );
}

export default Dessert;