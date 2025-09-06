import Nav from '../Nav';
import MenuCard from '../MenuCard';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../footer';
import '../App.css';

function China(){
    return <>
        <Nav />
        <div id="article-top">
              <h1>천안 중식 맛집 모음</h1>
              <div id="article-search">
                <input type="text" placeholder='검색어를 입력해 주세요'/>
                <button>검색</button>
              </div>
        </div>
        <span><h2>메뉴별 맛집 모음</h2></span>
        <div id="menu-list">
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu1.jpg`} name="짜장면" />
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu2.jpg`} name="마라탕" />
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu3.jpg`} name="짬뽕" />
        </div>
        <span><h2>맛집 추천</h2></span>
        <div id="recommand">
            <RestaurantCard 
              image={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} 
              title="00반점"
              hashtag="#짜장면"
              address="00시 00구 00동"
            />
        </div>
        <Footer />
    </>
}

export default China;