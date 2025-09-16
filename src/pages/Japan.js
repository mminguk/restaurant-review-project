import Nav from "../Nav";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../styles/Category.css';
import { japan } from "../data/japan-data";
function Japan(){
  const navigate=useNavigate();
  const location=useLocation();
    return (
        <>
        <Nav />
        <div id="category-article-top">
              <h1>천안 일식 맛집 모음</h1>
              <div id="category-article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <div id="recommand">
          {japan.map((it)=>(
            <RestaurantCard key={it.id} {...it} onclick={()=>{
              navigate(`${location.pathname}/DetailPage/${it.id}`,{state:{
                    ...it,
                    routeName:location.pathname
              }});
            }} />
          ))}
        </div>
        <Footer />
    </>
    );
}

export default Japan;