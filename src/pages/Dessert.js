import Nav from "../Nav";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../styles/Category.css';
import { dessert } from "../data/dessert-data";
function Dessert(){
  const navigate=useNavigate();
  const location=useLocation();
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
            {dessert.map((it)=>(
              <RestaurantCard key={it.id} {...it} onclick={()=>{
              navigate(`${location.pathname}/DetailPage/${it.id}`,{state:{
                    ...it
              }});
            }}  />
            ))}
        </div>
        <Footer />
    </>
    );
}

export default Dessert;