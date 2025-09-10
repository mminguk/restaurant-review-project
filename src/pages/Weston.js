import Nav from "../Nav";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../footer";
import { pasta } from "../data/weston-data";
import { pizza } from "../data/weston-data";
import { india } from "../data/weston-data";
function Weston(){
    return (
        <>
        <Nav />
        <div id="article-top">
              <h1>천안 양식 맛집 모음</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <span><h1>메뉴별 맛집 모음</h1></span>
        <span><h2>파스타</h2></span>
        <div id="recommand">
            {pasta.map((item)=>(
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
        <span><h2>피자</h2></span>
        <div id="recommand">
            {pizza.map((item)=>(
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
        <span><h2>인도요리</h2></span>
        <div id="recommand">
            {india.map((item)=>(
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
        <Footer />
    </>
    );
}

export default Weston;