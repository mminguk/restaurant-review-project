import Nav from "../Nav";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../footer";
import '../styles/Category.css';
import { weston } from "../data/weston-data";
function Weston(){
    return (
        <>
        <Nav />
        <div id="category-article-top">
              <h1>천안 양식 맛집 모음</h1>
              <div id="category-article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <div id="recommand">
            {weston.map((item)=>(
              <RestaurantCard key={item.id} {...item} category="Weston" />
            ))}
        </div>
        <Footer />
    </>
    );
}

export default Weston;