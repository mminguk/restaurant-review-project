import Nav from '../Nav';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/Category.css';
import { china } from '../data/china-data';

function China(){
  const navigate=useNavigate();
  const location=useLocation();
    return <>
        <Nav />
        <div id="category-article-top">
              <h1>천안 중식 맛집 모음</h1>
              <div id="category-article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <div id="recommand">
          {china.map((it)=>(
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
}

export default China;