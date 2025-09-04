import Nav from '../Nav';
import MenuCard from '../MenuCard';
import RestaurantCard from '../components/RestaurantCard';
import '../App.css';
function Korea(){
    return <>
        <Nav />
        <div id="article-top">
              <h1>천안 한식 맛집 모음</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <span><h2>메뉴별 맛집 모음</h2></span>
        <div id="menu-list">
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu1.jpg`} name="찌개/찜" />
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu2.jpg`} name="백반" />
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu2.jpg`} name="한정식" />
        </div>
        <span><h2>오늘의 추천 맛집</h2></span>
        <div id="recommand">
            <RestaurantCard 
              image={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} 
              title="정희백반"
              hashtag="#백반"
              address="충청남도 천안시 서북구 두정동"
            />
        </div>
    </>
}

export default Korea;