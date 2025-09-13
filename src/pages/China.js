import Nav from '../Nav';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../footer';
import '../styles/Category.css';
import { china } from '../data/china-data';

function China(){
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
          {china.map((item)=>(
            <RestaurantCard key={item.id} {...item} category="China" />
          ))}
        </div>
        <Footer />
    </>
}

export default China;