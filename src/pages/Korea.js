import Nav from '../Nav';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../footer';
import '../styles/Category.css';
import { korea } from '../data/korea-data';
function Korea(){
    return <>
        <Nav />
        <div id="category-article-top">
              <h1>천안 한식 맛집 모음</h1>
              <div id="category-article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <div id="recommand">
          {korea.map((it)=>(
            <RestaurantCard key={it.id} {...it} category="Korea" />
          ))}
        </div>
        <Footer />
    </>
}

export default Korea;