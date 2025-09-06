import Nav from "../Nav";
import MenuCard from "../MenuCard";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../footer";
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
        <span><h2>메뉴별 맛집 모음</h2></span>
        <div id="menu-list">
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu1.jpg`} name="파스타" />
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu2.jpg`} name="피자" />
            <MenuCard image={`${process.env.PUBLIC_URL}/assets/menu3.jpg`} name="리조또" />
        </div>
        <span><h2>맛집 추천</h2></span>
        <div id="recommand">
            <RestaurantCard 
              image={`${process.env.PUBLIC_URL}/assets/matzip1.jpg`} 
              title="00파스타"
              hashtag="#파스타"
              address="00시 00구 00동"
            />
        </div>
        <Footer />
    </>
    );
}

export default Weston;