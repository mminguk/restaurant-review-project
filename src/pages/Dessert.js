import Nav from "../Nav";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../footer";
import '../styles/Category.css';
import { dessert } from "../data/dessert-data";
function Dessert(){
    return (
        <>
        <Nav />
        <div id="category-article-top">
              <h1>천안 분위기 좋은 카페모음</h1>
              <div id="category-article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <div id="recommand">
            {dessert.map((item)=>(
              <RestaurantCard key={item.id} {...item} category="Dessert" />
            ))}
        </div>
        <Footer />
    </>
    );
}

export default Dessert;